import { IBlock } from '@/types';
import { LazyImage } from '../LazyImage';
import { Image } from '../Image';
import { CTAButtons } from '../cta';
import { Typography } from '../Typography';

const StartPageHeroBlock = ({ image, logo, primaryCTA, secondaryCTA, subHeading }: IBlock) => {
  return (
    <section className='relative h-[calc(100vh-6.5rem)] before:bg-black before:bg-opacity-50 before:dark:bg-opacity-[0.6] before:content-[""] before:w-full before:h-full before:absolute'>
      <LazyImage image={image} className='h-full w-full' containerClass='h-[calc(100vh-6.5rem)]' />
      <div className='absolute top-0 flex justify-center items-center flex-col w-full h-full'>
        <Image image={logo} className='h-12 sm:h-20 lg:h-32' />
        <div className='flex items-center gap-4 mt-8 mb-12 lg:flex-row flex-col'>
          {subHeading && (
            <Typography type='subHeading' text={subHeading} className='text-xl text-white tracking-widest' />
          )}
          <CTAButtons primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} />
        </div>
      </div>
    </section>
  );
};

export { StartPageHeroBlock };
