import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useApi from '../useApi';

// 백엔드(hotel-laundry-server) PopupService와 값을 맞춘다.
export const POPUP_SIZES = {
  sm: { label: '작게', px: 360 },
  md: { label: '보통', px: 480 },
  lg: { label: '크게', px: 640 },
};
export const AUTO_DELETE_OPTIONS = [
  { days: 7, label: '7일' },
  { days: 30, label: '30일' },
  { days: 90, label: '3개월' },
  { days: 365, label: '1년' },
];
export const DEFAULT_AUTO_DELETE_DAYS = 90;
export const MAX_IMAGE_MB = 5;

export const popupImageUrl = (key) => `${process.env.REACT_APP_IMAGE_BASE_URL || ''}${key}`;

// 서버 검증 메시지(ErrorResponse.message)를 화면에 그대로 보여준다.
export const errorMessage = (error) => {
  try {
    return JSON.parse(error.body).message || error.message;
  } catch {
    return error?.message || '요청에 실패했습니다.';
  }
};

const KEY = ['admin', 'popups'];

export function useAdminPopups() {
  const api = useApi();
  return useQuery({ queryKey: KEY, queryFn: () => api.get('/admin/popups') });
}

export function usePopupMutations() {
  const api = useApi();
  const qc = useQueryClient();
  const refresh = { onSuccess: () => qc.invalidateQueries({ queryKey: KEY }) };
  return {
    save: useMutation({
      mutationFn: ({ id, formData }) =>
        id ? api.patch(`/admin/popups/${id}`, formData) : api.post('/admin/popups', formData),
      ...refresh,
    }),
    toggle: useMutation({
      mutationFn: ({ id, value }) => api.patch(`/admin/popups/${id}/enabled`, undefined, { query: { value } }),
      ...refresh,
    }),
    remove: useMutation({ mutationFn: (id) => api.del(`/admin/popups/${id}`), ...refresh }),
    settings: useMutation({ mutationFn: (s) => api.put('/admin/popups/settings', s), ...refresh }),
  };
}
