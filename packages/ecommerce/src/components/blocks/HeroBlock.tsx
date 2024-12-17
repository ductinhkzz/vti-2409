import { IBlock } from '@/types';
import { cn } from '@/lib';
import { LazyImage } from '../LazyImage';
import { Typography } from '../Typography';
import { CTAButtons } from '../cta';
import { getMediaUrl } from '@/utils';
import { BLOCK_TEXT_ALIGN, BLOCK_THEME, HERO_BLOCK_STYLES } from '@/constants';

const STYLE_CLASSES: Record<string, Record<string, Record<'container' | 'item1' | 'item2' | 'textItem2', string>>> = {
  [HERO_BLOCK_STYLES.TEXT_MEDIA]: {
    [BLOCK_THEME.ALMOST_BLACK]: {
      container: 'grid grid-cols-2 bg-black',
      item1: '',
      item2: 'col-start-2',
      textItem2: 'px-16 max-w-[75%]',
    },
  },
  [HERO_BLOCK_STYLES.SINGLE_IMAGE]: {
    [BLOCK_THEME.ALMOST_BLACK]: {
      container:
        'bg-black before:bg-black before:bg-opacity-50 before:content-[""] before:w-full before:h-full before:absolute',
      item1: '',
      item2: 'absolute top-0 flex justify-center h-full w-full',
      textItem2: '',
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
  const currTheme = currStyle[theme ?? BLOCK_THEME.WHITE];
  return (
    <section className={cn('relative', currTheme.container)}>
      {video1 && (
        <video autoPlay loop muted className='w-full'>
          <track default kind='captions' srcLang='en' src={heading ?? ''} />
          <source src={getMediaUrl(video1.url)} />
        </video>
      )}
      <LazyImage image={image1} className='h-full w-full xl:h-[70vh]' />
      <LazyImage image={image2} className='h-full w-full xl:h-[70vh]' containerClass={currTheme.item2} />
      <div
        className={cn(
          currTheme.item2,
          currTheme.textItem2,
          'absolute top-0 flex justify-center h-full',
          textAlign === 'center' ? 'w-full' : '2xl:w-3/6 h-full 2xl:ps-[25%] xl:ps-56 xl:w-4/6',
        )}>
        <div
          className={cn(
            'flex justify-center items-start flex-col h-full p-8 lg:p-16 xl:p-0',
            TEXT_CLASSES[textAlign2 ?? textAlign ?? BLOCK_TEXT_ALIGN.LEFT],
          )}>
          {eyeBrow && <Typography type='eyeBrow' text={eyeBrow} className='mb-4' />}
          {heading && <Typography text={heading} className='mb-2 sm:mb-4 lg:mb-6 uppercase' />}
          {body && <Typography type='body' text={body} className='mb-4' />}
          <CTAButtons primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} className='mt-0 sm:mt-4 lg:mt-6' />
        </div>
      </div>
    </section>
  );
};

export { HeroBlock };
