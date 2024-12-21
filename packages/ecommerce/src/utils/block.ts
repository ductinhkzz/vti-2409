import { BLOCK_THEME, THEME_BG_COLOR } from '@/constants';

export const getThemeClass = (theme: string | null) => THEME_BG_COLOR[theme ?? BLOCK_THEME.WHITE];
