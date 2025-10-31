import React, { useState, useEffect } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';
import emailjs from '@emailjs/browser';
import { useMetaTags } from '../hooks/useMetaTags';
import useApi from '../hooks/useApi';

const Contact = () => {
  // 문의 페이지 전용 메타태그 설정 (기본값 사용)
  useMetaTags();

  // URL 쿼리 파라미터에서 type 읽기
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');

  // 문의 유형 상태 ('general': 일반 창업 문의, 'lowCapital': 소자본 창업 문의)
  const [inquiryType, setInquiryType] = useState(
    typeParam === 'lowCapital' ? 'lowCapital' : 'general'
  );

  // URL 파라미터가 변경되면 inquiryType 업데이트
  useEffect(() => {
    if (typeParam === 'lowCapital') {
      setInquiryType('lowCapital');
    } else if (typeParam === 'general') {
      setInquiryType('general');
    }
  }, [typeParam]);

  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone1: '',
    phone2: '',
    phone3: '',
    emailId: '',
    emailDomain: '',
    // 일반 창업 문의용 필드
    region: '',
    detailRegion: '',
    openingTime: '',
    // 소자본 창업 문의용 필드
    firstChoice: '',
    secondChoice: '',
    thirdChoice: '',
    firstChoiceId: null,
    secondChoiceId: null,
    thirdChoiceId: null,
    // 공통 필드
    investment: '',
    hasExperience: '',
    buildingType: '',
    knowPath: '',
    etc: '',
  });

  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const api = useApi();

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해 주세요.');
      return;
    }

    // 필수 필드 검증 - 문의 유형에 따라 다름
    // 공통 필수: 이름, 연락처(중간/끝)
    let requiredFields = ['name', 'phone2', 'phone3'];
    if (inquiryType === 'general') {
      // 일반 창업: 지역, 상세지역 필수
      requiredFields = [...requiredFields, 'region', 'detailRegion'];
    }

    // 이메일 입력 유효성: 한쪽만 채우면 오류로 간주
    const emailHalfFilled =
      (!!formData.emailId && !formData.emailDomain) ||
      (!formData.emailId && !!formData.emailDomain);

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0 || emailHalfFilled) {
      const labels = {
        name: '이름',
        phone2: '연락처 가운데',
        phone3: '연락처 끝자리',
        region: '개설희망지역',
        detailRegion: '상세지역',
      };
      const missingLabelList = missingFields.map((f) => labels[f] || f).join(', ');
      const emailMsg = emailHalfFilled ? (missingLabelList ? ', 이메일' : '이메일') : '';
      alert(`다음 필수 항목을 입력해 주세요: ${missingLabelList}${emailMsg}`);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // 1) 서버 문의 저장 API 호출
      const contactType = inquiryType === 'lowCapital' ? 'LOW_CAPITAL' : 'GENERAL';
      const buildPhone = () =>
        `010-${String(formData.phone2 || '')}-${String(formData.phone3 || '')}`;
      const buildEmail = () =>
        formData.emailId && formData.emailDomain
          ? `${formData.emailId}@${formData.emailDomain}`
          : '';
      const toNull = (v) => (v === '' || v === undefined ? null : v);

      const payload = {
        createUserDto: {
          userName: toNull(formData.name),
          phone: buildPhone(),
          age: toNull(formData.age),
          gender: toNull(formData.gender),
          email: toNull(buildEmail()),
        },
        contactType,
        generalContact:
          contactType === 'GENERAL'
            ? {
                region: toNull(formData.region),
                detailRegion: toNull(formData.detailRegion),
                openingTime: toNull(formData.openingTime),
              }
            : {
                region: null,
                detailRegion: null,
                openingTime: null,
              },
        lowCapitalContact:
          contactType === 'LOW_CAPITAL'
            ? {
                firstChoice: formData.firstChoiceId ?? null,
                secondChoice: formData.secondChoiceId ?? null,
                thirdChoice: formData.thirdChoiceId ?? null,
              }
            : {
                firstChoice: null,
                secondChoice: null,
                thirdChoice: null,
              },
        investment: toNull(formData.investment),
        hasExperience: formData.hasExperience === '' ? null : formData.hasExperience === 'yes',
        buildingType: formData.buildingType === '' ? null : formData.buildingType === 'own',
        knowPath: toNull(formData.knowPath),
        etc: toNull(formData.etc),
      };

      console.log('📤 Contact payload:', payload);
      const saveRes = await api.post('/contacts', payload);
      console.log('✅ /contacts 저장 성공:', {
        status: saveRes?.status,
        data: saveRes?.data,
      });

      // 2) 이메일 템플릿 데이터 준비
      const emailTemplateParams = {
        to_name: '담당자',
        from_name: formData.name,
        from_age: formData.age,
        from_gender: formData.gender === 'male' ? '남' : '여',
        from_phone: `010-${formData.phone2}-${formData.phone3}`,
        from_email: `${formData.emailId}@${formData.emailDomain}`,
        from_investment: formData.investment,
        from_experience: formData.hasExperience === 'yes' ? '예' : '아니오',
        from_building_type: formData.buildingType === 'own' ? '건물소유' : '건물임대',
        from_know_path: formData.knowPath,
        from_etc: formData.etc,
      };

      // 문의 유형에 따라 다른 메시지 생성
      let message = '';
      if (inquiryType === 'general') {
        emailTemplateParams.inquiry_type = '일반 창업 문의';
        emailTemplateParams.from_region = formData.region;
        emailTemplateParams.from_detail_region = formData.detailRegion;
        emailTemplateParams.from_opening_time = formData.openingTime;

        message = `
일반 창업 문의가 접수되었습니다.

이름: ${formData.name}
연령: ${formData.age}
성별: ${formData.gender === 'male' ? '남' : '여'}
연락처: 010-${formData.phone2}-${formData.phone3}
이메일: ${formData.emailId}@${formData.emailDomain}
개설희망지역: ${formData.region} ${formData.detailRegion}
개설희망시기: ${formData.openingTime}
투자가능비용: ${formData.investment}
빨래방 이용경험: ${formData.hasExperience === 'yes' ? '예' : '아니오'}
건물소유/임대: ${formData.buildingType === 'own' ? '건물소유' : '건물임대'}
알게된 경로: ${formData.knowPath || '미입력'}
기타 문의사항: ${formData.etc || '없음'}
        `;
      } else {
        emailTemplateParams.inquiry_type = '소자본 창업 문의';
        emailTemplateParams.from_first_choice = formData.firstChoice;
        emailTemplateParams.from_second_choice = formData.secondChoice || '미선택';
        emailTemplateParams.from_third_choice = formData.thirdChoice || '미선택';

        message = `
소자본 창업 문의가 접수되었습니다.

이름: ${formData.name}
연령: ${formData.age}
성별: ${formData.gender === 'male' ? '남' : '여'}
연락처: 010-${formData.phone2}-${formData.phone3}
이메일: ${formData.emailId}@${formData.emailDomain}
지역 선호도:
  - 1지망: ${formData.firstChoice}
  - 2지망: ${formData.secondChoice || '미선택'}
  - 3지망: ${formData.thirdChoice || '미선택'}
투자가능비용: ${formData.investment}
빨래방 이용경험: ${formData.hasExperience === 'yes' ? '예' : '아니오'}
건물소유/임대: ${formData.buildingType === 'own' ? '건물소유' : '건물임대'}
알게된 경로: ${formData.knowPath || '미입력'}
기타 문의사항: ${formData.etc || '없음'}
        `;
      }

      emailTemplateParams.message = message;

      // 문의 유형에 따라 다른 템플릿 ID 사용
      const templateId =
        inquiryType === 'lowCapital'
          ? process.env.REACT_APP_EMAILJS_TEMPLATE_ID_LOW_CAPITAL // 소자본 템플릿
          : process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // 일반 템플릿

      // EmailJS 전송 (환경변수 없으면 스킵, 실패해도 폼 제출은 성공 처리)
      // 참고: EmailJS 실패는 전체 제출 성공 여부에 영향을 주지 않음
      const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      if (PUBLIC_KEY && SERVICE_ID && templateId) {
        try {
          const emailRes = await emailjs.send(
            SERVICE_ID,
            templateId,
            emailTemplateParams,
            PUBLIC_KEY
          );
          console.log('📧 EmailJS 전송 성공:', emailRes);
        } catch (err) {
          // EmailJS 실패는 무시 (서버에 이미 저장되었으므로)
          console.warn('⚠️ EmailJS 전송 실패 (무시됨):', err);
        }
      } else {
        console.warn('⚠️ EmailJS 전송 건너뜀: EmailJS 환경변수 미설정');
      }

      setSubmitStatus('success');
      alert('문의가 성공적으로 접수되었습니다.');

      // 폼 초기화
      setFormData({
        name: '',
        age: '',
        gender: '',
        phone1: '',
        phone2: '',
        phone3: '',
        emailId: '',
        emailDomain: '',
        region: '',
        detailRegion: '',
        openingTime: '',
        firstChoice: '',
        secondChoice: '',
        thirdChoice: '',
        firstChoiceId: null,
        secondChoiceId: null,
        thirdChoiceId: null,
        investment: '',
        hasExperience: '',
        buildingType: '',
        knowPath: '',
        etc: '',
      });
      setAgree(false);
    } catch (error) {
      console.error('❌ 문의 접수 실패:', error);
      setSubmitStatus('error');
      // HTTP 요청 실패 시에만 여기 도달
      alert('문의 접수에 실패했습니다. 다시 시도해 주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      {/* 문의 폼 */}
      <Routes>
        <Route
          path="/"
          element={
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              agree={agree}
              setAgree={setAgree}
              submitStatus={submitStatus}
              inquiryType={inquiryType}
              setInquiryType={setInquiryType}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Contact;
