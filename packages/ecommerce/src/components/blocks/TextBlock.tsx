import { IBlock } from '@/types';
import { Typography } from '../Typography';
import { CTAButtons } from '../cta';

const TextBlock = ({ eyeBrow, heading, body, primaryCTA, secondaryCTA }: IBlock) => {
  return (
    <section className='relative w-full flex justify-center my-8 lg:my-16'>
      <div className='flex justify-center flex-col h-full p-8 lg:p-16 xl:p-0 items-center max-w-lg'>
        {eyeBrow && <Typography type='eyeBrow' text={eyeBrow} className='mb-4' useCurrentColor />}
        {heading && <Typography text={heading} className='mb-2 sm:mb-4 lg:mb-6' useCurrentColor />}
        {body && <Typography type='body' text={body} className='mb-2 text-center' useCurrentColor />}
        <CTAButtons
          primaryCTA={primaryCTA}
          secondaryCTA={secondaryCTA}
          className='mt-0 sm:mt-2 lg:mt-4'
          useCurrentColor
        />
      </div>
    </section>
  );
};

export { TextBlock };
