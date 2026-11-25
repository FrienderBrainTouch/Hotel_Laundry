import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  MAX_IMAGE_MB,
  POPUP_SIZES,
  errorMessage,
  popupImageUrl,
  useAdminPopups,
  usePopupMutations,
} from '../../../hooks/queries/usePopups';
import { Switch } from '.';

const ACCEPT = 'image/png,image/jpeg,image/webp,image/gif';
const MB = 1024 * 1024;
// 이보다 크면 등록은 되지만 경고를 띄운다(모바일 데이터 환경에서 팝업이 늦게 뜸).
const RECOMMENDED_MB = 1;

const formatSize = (bytes) => (bytes < MB ? `${Math.max(1, Math.round(bytes / 1024))}KB` : `${(bytes / MB).toFixed(1)}MB`);

// /admin/popups/new 와 /admin/popups/:id 공용
const PopupFormPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useAdminPopups();
  const popup = id ? data?.popups.find((p) => String(p.id) === id) : undefined;

  return (
    <div className="space-y-6">
      <div>
        <Link to="/admin/popups" className="text-sm text-gray-500 hover:text-gray-800">
          ← 팝업 목록
        </Link>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">{id ? '팝업 수정' : '새 팝업'}</h2>
      </div>
      {id && isLoading ? (
        <p className="py-20 text-center text-gray-500">불러오는 중...</p>
      ) : id && !popup ? (
        <p className="py-20 text-center text-gray-500">팝업을 찾을 수 없습니다.</p>
      ) : (
        <PopupForm key={id || 'new'} popup={popup} />
      )}
    </div>
  );
};

function PopupForm({ popup }) {
  const navigate = useNavigate();
  const { save } = usePopupMutations();
  const [preview, setPreview] = useState(popup ? popupImageUrl(popup.imageKey) : '');
  const [fileName, setFileName] = useState('');
  const [natural, setNatural] = useState(null);
  const [fileError, setFileError] = useState('');
  const [fileSize, setFileSize] = useState(null);
  const [size, setSize] = useState(popup?.size ?? 'md');
  const [rounded, setRounded] = useState(popup?.rounded ?? true);
  const [enabled, setEnabled] = useState(popup?.enabled ?? true);
  const [dragging, setDragging] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const objectUrl = useRef(null);
  const fileInput = useRef(null);

  useEffect(() => {
    // 드롭 영역 밖에 파일을 떨어뜨리면 브라우저가 그 이미지로 페이지를 이동해서 입력이 날아간다 — 막아둔다.
    const block = (e) => e.preventDefault();
    window.addEventListener('dragover', block);
    window.addEventListener('drop', block);
    return () => {
      window.removeEventListener('dragover', block);
      window.removeEventListener('drop', block);
      if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    };
  }, []);

  const onFile = (file) => {
    setFileError('');
    setFileSize(null);
    if (!file) return;
    setFileName(file.name);
    setFileSize(file.size);
    if (!ACCEPT.split(',').includes(file.type)) return setFileError('PNG, JPG, WEBP, GIF만 올릴 수 있습니다.');
    if (file.size > MAX_IMAGE_MB * MB) {
      return setFileError(
        `파일 크기가 ${formatSize(file.size)}로 최대 ${MAX_IMAGE_MB}MB를 넘어 올릴 수 없습니다. 이미지 용량을 줄여서 다시 선택해주세요.`
      );
    }
    if (objectUrl.current) URL.revokeObjectURL(objectUrl.current);
    objectUrl.current = URL.createObjectURL(file);
    setPreview(objectUrl.current);
  };

  // 드롭한 파일을 숨은 file input에 넣어 두고, 제출할 때 거기서 꺼낸다.
  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (!file || !fileInput.current) return;
    const dt = new DataTransfer();
    dt.items.add(file);
    fileInput.current.files = dt.files;
    onFile(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (fileError) return;
    const f = new FormData(e.currentTarget);
    const image = fileInput.current?.files?.[0];
    if (!popup && !image) return setSubmitError('팝업 이미지를 선택하세요.');
    const dto = {
      title: f.get('title'),
      link: f.get('link'),
      newTab: f.get('newTab') === 'on',
      size,
      rounded,
      startDate: f.get('startDate') || null,
      endDate: f.get('endDate') || null,
      enabled,
      displayOrder: Number(f.get('displayOrder') || 0),
    };
    const formData = new FormData();
    formData.append('dto', new Blob([JSON.stringify(dto)], { type: 'application/json' }));
    if (image) formData.append('image', image);
    setSubmitError('');
    save.mutate(
      { id: popup?.id, formData },
      { onSuccess: () => navigate('/admin/popups'), onError: (err) => setSubmitError(errorMessage(err)) }
    );
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start">
      <div className="flex flex-col gap-6">
        <Section title="기본 정보">
          <Field label="팝업 이름" required hint="관리용 이름이며, 이미지 대체 텍스트로도 쓰입니다.">
            <input
              name="title"
              required
              maxLength={100}
              defaultValue={popup?.title}
              placeholder="예: 11월 창업 설명회"
              className={`${INPUT} w-full`}
            />
          </Field>

          <Field
            label="이미지"
            required={!popup}
            hint={`PNG·JPG·WEBP·GIF, 최대 ${MAX_IMAGE_MB}MB(${RECOMMENDED_MB}MB 이하 권장). 받은 이미지를 그대로 올리면 원본 비율대로 표시됩니다.`}
          >
            {/* 자식 요소는 pointer-events-none: 드래그가 자식 위를 지날 때 dragleave가 튀어서 깜빡이는 걸 막는다. */}
            <label
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors [&>*]:pointer-events-none ${
                dragging ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-brand-blue hover:bg-blue-50/40'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-8 w-8 ${dragging ? 'text-brand-blue' : 'text-gray-400'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden
              >
                <path
                  d="M12 16V4m0 0-4 4m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm text-gray-600">
                {dragging ? (
                  <b className="text-brand-blue">여기에 놓으세요</b>
                ) : (
                  <>
                    이미지를 끌어다 놓거나 <b className="text-brand-blue">클릭해서 선택</b>하세요
                  </>
                )}
              </p>
              <p className="flex max-w-full items-center gap-2 text-sm">
                <span className="min-w-0 truncate text-gray-500">
                  {fileName || (popup ? '현재 이미지 유지 중' : '선택된 파일 없음')}
                </span>
                {fileSize !== null && (
                  <span
                    className={`shrink-0 font-semibold ${
                      fileError ? 'text-red-600' : fileSize > RECOMMENDED_MB * MB ? 'text-amber-600' : 'text-gray-500'
                    }`}
                  >
                    {formatSize(fileSize)}
                  </span>
                )}
              </p>
              <input
                ref={fileInput}
                type="file"
                name="image"
                accept={ACCEPT}
                className="sr-only"
                onChange={(e) => onFile(e.target.files?.[0])}
              />
            </label>
            {fileError ? (
              <p className="mt-2 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{fileError}</p>
            ) : (
              fileSize !== null &&
              fileSize > RECOMMENDED_MB * MB && (
                <p className="mt-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-700">
                  파일이 {formatSize(fileSize)}로 큰 편입니다. 등록은 되지만 모바일에서 팝업이 늦게 뜰 수 있습니다.{' '}
                  {RECOMMENDED_MB}MB 이하를 권장하며, JPG나 WEBP로 저장하면 용량이 크게 줄어듭니다.
                </p>
              )
            )}
          </Field>

          <Field label="링크" hint="비워두면 클릭해도 이동하지 않습니다. 사이트 안 페이지는 /startup-guide 처럼 입력하세요.">
            <input name="link" defaultValue={popup?.link ?? ''} placeholder="https://" className={`${INPUT} w-full`} />
            <label className="mt-2 flex w-fit items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" name="newTab" defaultChecked={popup?.newTab ?? true} className="h-4 w-4 accent-brand-blue" />
              새 창으로 열기
            </label>
          </Field>
        </Section>

        <Section title="형태">
          <Field label="표시 크기" hint="PC 기준 가로 폭입니다. 모바일에서는 화면 폭에 맞춰 줄어듭니다.">
            <Segmented>
              {Object.keys(POPUP_SIZES).map((key) => (
                <SegmentOption key={key} name="size" checked={size === key} onChange={() => setSize(key)}>
                  {POPUP_SIZES[key].label}
                  <span className="ml-1 hidden opacity-70 sm:inline">{POPUP_SIZES[key].px}px</span>
                </SegmentOption>
              ))}
            </Segmented>
          </Field>
          <Field label="모서리">
            <Segmented>
              <SegmentOption name="rounded" checked={!rounded} onChange={() => setRounded(false)}>
                각지게
              </SegmentOption>
              <SegmentOption name="rounded" checked={rounded} onChange={() => setRounded(true)}>
                둥글게
              </SegmentOption>
            </Segmented>
          </Field>
        </Section>

        <Section title="노출 설정">
          <Field label="활성화">
            <div className="flex items-center gap-3">
              <Switch checked={enabled} onChange={setEnabled} label="팝업 활성화" />
              <span className="text-sm text-gray-700">끄면 기간과 관계없이 노출되지 않습니다.</span>
            </div>
          </Field>
          <Field label="노출 기간" hint="비워두면 제한 없이 노출됩니다. 종료일 당일 밤 12시까지 노출됩니다(한국 시간).">
            <div className="flex flex-wrap items-center gap-2">
              <input type="date" name="startDate" defaultValue={popup?.startDate ?? ''} className={INPUT} />
              <span className="text-gray-400">~</span>
              <input type="date" name="endDate" defaultValue={popup?.endDate ?? ''} className={INPUT} />
            </div>
          </Field>
          <Field label="노출 순서" hint="숫자가 작을수록 먼저 뜹니다(PC는 왼쪽부터).">
            <input
              type="number"
              name="displayOrder"
              min={0}
              max={999}
              defaultValue={popup?.displayOrder ?? 0}
              className={`${INPUT} w-28`}
            />
          </Field>
        </Section>

        <div className="flex flex-wrap items-center justify-end gap-3">
          {submitError && <p className="mr-auto text-sm font-medium text-red-600">{submitError}</p>}
          <Link
            to="/admin/popups"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            취소
          </Link>
          <button
            type="submit"
            disabled={save.isPending}
            className="rounded-lg bg-brand-blue px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {save.isPending ? '저장 중...' : popup ? '수정 저장' : '등록'}
          </button>
        </div>
      </div>

      <aside className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm xl:sticky xl:top-24">
        <p className="font-bold text-gray-900">미리보기</p>
        <p className="mt-1 text-xs text-gray-400">PC 화면(1440px) 기준 축소 화면입니다.</p>
        {/* 1440px 화면을 상자 크기로 축소 — 팝업 폭도 같은 비율로 줄여서 실제 크기감을 보여준다. */}
        <div className="relative mt-4 flex aspect-[16/10] items-start justify-center overflow-hidden rounded-lg bg-gray-700 pt-[6%]">
          <div className="absolute inset-x-0 top-0 h-[7%] bg-brand-blue" />
          {preview ? (
            <div
              className={`relative z-10 overflow-hidden bg-white shadow-xl ${rounded ? 'rounded-md' : ''}`}
              style={{ width: `${(POPUP_SIZES[size].px / 1440) * 100}%` }}
            >
              <img
                src={preview}
                alt=""
                className="block h-auto w-full"
                onLoad={(e) => setNatural({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
              />
              <div className="flex justify-between bg-gray-900 px-1 py-0.5 text-[5px] text-white">
                <span>오늘 하루 보지 않기</span>
                <span>닫기</span>
              </div>
            </div>
          ) : (
            <p className="relative z-10 mt-[15%] text-sm text-white/60">이미지를 선택하면 표시됩니다</p>
          )}
        </div>
        {natural && (
          <p className="mt-3 text-xs text-gray-500">
            원본 {natural.w}×{natural.h}px · 화면 표시 {POPUP_SIZES[size].px}×
            {Math.round((POPUP_SIZES[size].px * natural.h) / natural.w)}px
            {natural.w < POPUP_SIZES[size].px * 2 && (
              <span className="mt-1 block text-amber-600">
                선명하게 보이려면 가로 {POPUP_SIZES[size].px * 2}px 이상 이미지를 권장합니다(고해상도 화면).
              </span>
            )}
          </p>
        )}
      </aside>
    </form>
  );
}

const INPUT =
  'rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20';

function Section({ title, children }) {
  return (
    <section className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <h3 className="mb-5 text-base font-bold text-gray-900">{title}</h3>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <div className="grid gap-2 md:grid-cols-[120px_minmax(0,1fr)] md:gap-4">
      <p className="pt-2 text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="ml-0.5 text-brand-blue">*</span>}
      </p>
      <div className="min-w-0">
        {children}
        {hint && <p className="mt-1.5 text-xs text-gray-400">{hint}</p>}
      </div>
    </div>
  );
}

function Segmented({ children }) {
  return <div className="inline-flex rounded-lg bg-gray-100 p-1">{children}</div>;
}

function SegmentOption({ name, checked, onChange, children }) {
  return (
    <label
      className={`cursor-pointer whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-semibold transition-colors md:px-4 ${
        checked ? 'bg-white text-brand-blue shadow-sm' : 'text-gray-500 hover:text-gray-800'
      }`}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

export default PopupFormPage;
