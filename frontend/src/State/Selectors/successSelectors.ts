import { RootState } from '../Store/store';

export const selectHasAnySuccess = (state: RootState): boolean => {
  return Object.values(state.status).some((s) => s.status === 'fulfilled');
};

export const selectIsRequestSuccess = (state: RootState, requestId: string): boolean => {
  return state.status[requestId]?.status === 'fulfilled';
};
