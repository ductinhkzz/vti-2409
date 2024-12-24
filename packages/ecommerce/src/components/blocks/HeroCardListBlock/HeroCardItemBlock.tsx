import { IItem } from '@/types';
import { CTAButton } from '@/components/cta';
import { LazyImage } from '@/components/LazyImage';
import { Typography } from '@/components/Typography';
import { cn } from '@/lib';
import { CarouselItem } from '@/components/ui';
import { SLIDER_CLASSES } from '@/constants';

type Props = {
  item: IItem;
  count?: number;
};

const TEXT_POSITION: Record<string, string> = {
  top: 'top-0',
  bottom: 'bottom-0',
};

const HeroCardItemBlock = ({ item: { image, heading, subTitle, link, textPosition }, count = 1 }: Props) => {
  return (
    <CarouselItem className={cn('basis-full', SLIDER_CLASSES[count], count <= 2 && 'pl-0')}>
      <div className='relative before:bg-black before:bg-opacity-25 before:content-[""] before:w-full before:h-full before:absolute'>
        <LazyImage image={image} className='h-full w-full min-h-80' />
        <div className={cn('absolute w-full left-0', textPosition && TEXT_POSITION[textPosition])}>
          <div className='flex justify-center items-start flex-col h-full p-8'>
            {heading && (
              <Typography
                text={heading}
                fixedSize='text-sm tracking-widest'
                className='mb-2 uppercase tracking-[0.15em] max-w-72'
              />
            )}
            {subTitle && <Typography type='subTitle' text={subTitle} className='mb-4 max-w-64' />}
            <CTAButton data={link} />
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export { HeroCardItemBlock };
