import { IBlock } from '@/types';
import { CTAButton } from '@/components/cta';
import { Typography } from '@/components/Typography';
import { HeroCardItemBlock } from './HeroCardItemBlock';
import { Carousel, CarouselContent } from '@/components/ui';

const HeroCardListBlock = ({ heading, link, items }: IBlock) => {
  return (
    <section className='relative w-full flex justify-center my-12 lg:my-24'>
      <div className='w-full'>
        <div className='flex flex-col items-center mb-8'>
          <Typography text={heading} fixedSize='text-lg tracking-widest text-center' useCurrentColor />
          <CTAButton data={link} useCurrentColor className='w-fit' />
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'>
          <CarouselContent>
            {items.map((item) => (
              <HeroCardItemBlock key={item.id} item={item} count={items.length} />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { HeroCardListBlock };