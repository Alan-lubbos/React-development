import { RootState } from "../Store/store";
export const selectThemeMode = (state: RootState) => state.theme.mode;