import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui';
import { CardItemBlock } from './CardItemBlock';
import { Typography } from '@/components/Typography';
import { CTAButton } from '@/components/cta';
import { IBlock } from '@/redux/types';

const CardSliderBlock = ({ items, heading, link }: IBlock) => {
  return (
    <section className='relative w-full flex justify-center my-12 lg:my-24'>
      <div className='max-w-5xl w-full flex flex-col items-center'>
        <div className='flex flex-col items-center mb-6'>
          <Typography text={heading} fixedSize='text-lg tracking-[0.2em] uppercase' useCurrentColor />
          <CTAButton data={link} useCurrentColor className='w-fit' />
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-5xl'
        >
          <div className='hidden absolute md:flex items-center justify-center gap-2 -top-6 right-0'>
            <CarouselPrevious className='relative top-0 left-0' />
            <CarouselNext className='relative top-0 left-0' />
          </div>
          <CarouselContent>
            {items.map((item) => (
              <CardItemBlock key={item.id} item={item} isSlider />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { CardSliderBlock };
