import { CTAButtons } from '@/components/cta';
import { Typography } from '@/components/Typography';
import { IBlock } from '@/redux/types';
import { ImageSlider } from './ImageSlider';

const ImageSliderBlock = ({ images, eyeBrow, heading, body, primaryCTA, secondaryCTA }: IBlock) => {
  return (
    <section className='lg:grid grid-cols-2 my-12 lg:my-24'>
      <div className='col-start-1'>
        <div className='flex justify-center items-start flex-col h-full p-8 sm:py-8 sm:px-16 xl:py-12 xl:px-36'>
          {eyeBrow && <Typography type='eyeBrow' text={eyeBrow} className='mb-4' useCurrentColor />}
          {heading && <Typography text={heading} className='mb-2 sm:mb-4 lg:mb-6 uppercase' useCurrentColor />}
          {body && <Typography type='body' text={body} className='mb-4' useCurrentColor />}
          <CTAButtons
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
            className='mt-0 sm:mt-4 lg:mt-6'
            useCurrentColor
          />
        </div>
      </div>
      <div className='col-start-2'>
        <ImageSlider images={images} />
      </div>
    </section>
  );
};

export { ImageSliderBlock };
