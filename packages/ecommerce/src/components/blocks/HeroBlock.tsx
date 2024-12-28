import { IBlock } from '@/redux/types';
import { cn } from '@/lib';
import { LazyImage } from '../LazyImage';
import { Typography } from '../Typography';
import { CTAButtons } from '../cta';
import { getMediaUrl } from '@/utils';
import { BLOCK_TEXT_ALIGN, BLOCK_THEME, HERO_BLOCK_STYLES } from '@/constants';

const CONTAINER_CLASS =
  'before:bg-black before:bg-opacity-50 before:content-[""] before:w-full before:h-full before:absolute';

const STYLE_CLASSES: Record<string, Record<string, Record<string, string>>> = {
  [HERO_BLOCK_STYLES.TEXT_MEDIA]: {
    [BLOCK_THEME.ALMOST_BLACK]: {
      container: cn('md:grid grid-cols-2 bg-black', CONTAINER_CLASS, 'md:before:bg-transparent'),
      item1: '',
      item2: 'col-start-2',
      textItem2: 'px-16 md:max-w-[75%]',
    },
    [BLOCK_THEME.WHITE]: {
      container: cn('md:grid grid-cols-2 bg-black', CONTAINER_CLASS, 'md:before:bg-transparent'),
      item1: '',
      item2: 'col-start-2',
      textItem2: 'px-16 md:max-w-[75%]',
    },
    [BLOCK_THEME.WARM_GREY]: {
      container: cn('md:grid grid-cols-2 bg-stone-50 dark:bg-zinc-900', CONTAINER_CLASS, 'md:before:bg-transparent'),
      item1: '',
      item2: 'col-start-2',
      textItem2: 'px-16 md:max-w-[75%]',
    },
    textAlign: {
      [BLOCK_TEXT_ALIGN.CENTER]: 'w-full',
      [BLOCK_TEXT_ALIGN.LEFT]: 'p-0 xl:ps-16 2xl:ps-32',
    },
  },
  [HERO_BLOCK_STYLES.SINGLE_IMAGE]: {
    [BLOCK_THEME.ALMOST_BLACK]: {
      container: CONTAINER_CLASS,
      item1: '',
      item2: 'absolute top-0 flex justify-center h-full w-full',
      textItem2: '',
    },
    [BLOCK_THEME.WHITE]: {
      container: CONTAINER_CLASS,
      item1: '',
      item2: 'absolute top-0 flex justify-center h-full w-full',
      textItem2: '',
    },
    [BLOCK_THEME.WARM_GREY]: {
      container: CONTAINER_CLASS,
      item1: '',
      item2: 'absolute top-0 flex justify-center h-full w-full',
      textItem2: '',
    },
    textAlign: {
      [BLOCK_TEXT_ALIGN.CENTER]: 'w-full',
      [BLOCK_TEXT_ALIGN.LEFT]: '2xl:w-3/6 h-full 2xl:ps-[25%] xl:ps-56 xl:w-4/6',
    },
  },
};

const TEXT_CLASSES = {
  [BLOCK_TEXT_ALIGN.CENTER]: 'items-center',
  [BLOCK_TEXT_ALIGN.LEFT]: 'items-start',
  [BLOCK_TEXT_ALIGN.RIGHT]: 'items-end',
};

const HeroBlock = ({
  image1,
  image2,
  theme,
  eyeBrow,
  heading,
  body,
  primaryCTA,
  secondaryCTA,
  video1,
  textAlign,
  textAlign2,
  style,
}: IBlock) => {
  const currStyle = STYLE_CLASSES[style ?? HERO_BLOCK_STYLES.SINGLE_IMAGE];
  const currTheme = theme ?? BLOCK_THEME.WHITE;
  const currThemeClasses = currStyle[currTheme];
  const isNotBlackTheme = currTheme !== BLOCK_THEME.ALMOST_BLACK;

  return (
    <section className={cn('relative', currThemeClasses.container)}>
      {video1 && (
        <video autoPlay loop muted className='w-full'>
          <track default kind='captions' srcLang='en' src={heading ?? ''} />
          <source src={getMediaUrl(video1.url)} />
        </video>
      )}
      <LazyImage image={image1} className='h-full w-full min-h-80 xl:h-[70vh]' />
      <LazyImage image={image2} className='h-full w-full xl:h-[70vh]' containerClass={currThemeClasses.item2} />
      <div
        className={cn(
          currThemeClasses.item2,
          currThemeClasses.textItem2,
          Boolean(image2) && 'md:col-start-1',
          'absolute top-0 flex justify-center h-full',
          currStyle.textAlign[textAlign ?? BLOCK_TEXT_ALIGN.LEFT],
        )}
      >
        <div
          className={cn(
            'flex justify-center items-start flex-col h-full p-4 sm:p-8 lg:p-16 xl:p-0',
            TEXT_CLASSES[textAlign2 ?? textAlign ?? BLOCK_TEXT_ALIGN.LEFT],
          )}
        >
          {eyeBrow && (
            <Typography
              type='eyeBrow'
              text={eyeBrow}
              className={cn('mb-2 sm:mb-4', isNotBlackTheme && 'text-white md:text-current')}
            />
          )}
          {heading && (
            <Typography
              text={heading}
              className={cn('mb-2 sm:mb-4 lg:mb-6 uppercase', isNotBlackTheme && 'text-white md:text-current')}
            />
          )}
          {body && (
            <Typography
              type='body'
              text={body}
              className={cn('mb-2 sm:mb-4', isNotBlackTheme && 'text-white md:text-current')}
            />
          )}
          <CTAButtons
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
            className='mt-0 sm:mt-4 lg:mt-6'
            primaryBtnClass={cn(isNotBlackTheme && 'md:border-gray-700 md:dark:border-white md:text-inherit')}
          />
        </div>
      </div>
    </section>
  );
};

export { HeroBlock };
