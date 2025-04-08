import { RootState } from '../Store/store';

export const selectHasRequestError = (requestId: string) => (state: RootState): boolean => {
  return state.status[requestId]?.status === 'rejected';
};

export const selectRequestErrorMessage = (requestId: string) => (state: RootState): string | undefined => {
  return state.status[requestId]?.error;
};
