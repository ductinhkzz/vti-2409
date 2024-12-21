export const HERO_BLOCK_STYLES = {
  SINGLE_IMAGE: 'single-image',
  TEXT_MEDIA: 'text-and-media',
};

export const BLOCK_THEME = {
  ALMOST_BLACK: 'theme-almost-black',
  WHITE: 'theme-white',
  WARM_GREY: 'theme-warm-grey',
};

export const THEME_BG_COLOR = {
  [BLOCK_THEME.ALMOST_BLACK]: 'bg-black',
  [BLOCK_THEME.WHITE]: '',
  [BLOCK_THEME.WARM_GREY]: 'bg-stone-100 dark:bg-zinc-900',
};

export const BLOCK_TEXT_ALIGN: Record<string, string> = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
};

export const SLIDER_CLASSES: Record<number, string> = {
  2: 'md:basis-1/2',
  3: 'md:basis-1/3',
  4: 'md:basis-1/4',
};
