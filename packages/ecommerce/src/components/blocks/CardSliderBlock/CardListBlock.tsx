import { IBlock } from '@/types';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui';
import { CardItemBlock } from './CardItemBlock';
import React from 'react';
import { getThemeClass } from '@/utils';
import { cn } from '@/lib';

type Props = IBlock & {
  children?: React.ReactNode | JSX.Element;
  isSlider?: boolean;
};

const CardListBlock = ({ items, children, isSlider, theme }: Props) => {
  const bg = getThemeClass(theme);
  return (
    <section className={cn('relative w-full flex justify-center', bg)}>
      <div className='max-w-5xl w-full flex flex-col items-center my-12 lg:my-24'>
        {children}
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-5xl'>
          {isSlider && (
            <div className='hidden absolute md:flex items-center justify-center gap-2 -top-6 right-0'>
              <CarouselPrevious className='relative top-0 left-0' />
              <CarouselNext className='relative top-0 left-0' />
            </div>
          )}
          <CarouselContent>
            {items.map((item) => (
              <CardItemBlock key={item.id} item={item} isSlider={isSlider} count={items.length} />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { CardListBlock };
