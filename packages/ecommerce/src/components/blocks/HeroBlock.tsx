import { IBlock } from '@/types';
import { cn } from '@/lib';
import { LazyImage } from '../LazyImage';
import { Typography } from '../Typography';
import { CTAButtons } from '../cta';
import { getMediaUrl } from '@/utils';

const HeroBlock = ({ image1, theme, eyeBrow, heading, body, primaryCTA, secondaryCTA, video1, textAlign }: IBlock) => {
  return (
    <section
      className={cn(
        'relative',
        theme === 'theme-almost-black' &&
          'before:bg-black before:bg-opacity-50 before:content-[""] before:w-full before:h-full before:absolute',
      )}>
      {video1 && (
        <video autoPlay loop muted className='w-full'>
          <track default kind='captions' srcLang='en' src={heading ?? ''} />
          <source src={getMediaUrl(video1.url)} />
        </video>
      )}
      <LazyImage image={image1} className='h-full w-full xl:h-[70vh]' />
      <div
        className={cn(
          'absolute top-0 flex justify-center h-full',
          textAlign === 'center' ? 'w-full' : '2xl:w-3/6 h-full 2xl:ps-[25%] xl:ps-56 xl:w-4/6',
        )}>
        <div
          className={cn(
            'flex justify-center items-start flex-col h-full p-8 lg:p-16 xl:p-0',
            textAlign === 'center' && 'items-center',
          )}>
          {eyeBrow && <Typography type='eyeBrow' text={eyeBrow} className='mb-4' />}
          {heading && <Typography text={heading} className='mb-2 sm:mb-4 lg:mb-6' />}
          {body && <Typography type='body' text={body} className='mb-4' />}
          <CTAButtons primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} className='mt-0 sm:mt-4 lg:mt-6' />
        </div>
      </div>
    </section>
  );
};

export { HeroBlock };
