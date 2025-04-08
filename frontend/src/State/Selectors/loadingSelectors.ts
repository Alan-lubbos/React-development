import { RootState } from '../Store/store';

export const selectIsLoading = (state: RootState): boolean => {
  return Object.values(state.status).some((s) => s.status === 'pending');
};

export const selectIsRequestLoading = (state: RootState, requestId: string): boolean => {
  return state.status[requestId]?.status === 'pending';
};
