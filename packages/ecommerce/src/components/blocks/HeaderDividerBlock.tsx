import { IBlock } from '@/types';
import { Typography } from '../Typography';
import { CTAButtons } from '../cta';

const HeaderDividerBlock = ({ heading, body, primaryCTA, secondaryCTA }: IBlock) => {
  return (
    <section className='relative w-full flex justify-center my-12 lg:my-24'>
      <div className='max-w-5xl w-full flex flex-col items-center lg:items-start lg:grid lg:grid-cols-12 gap-4 lg:gap-2'>
        <div className='lg:col-start-2 col-span-3'>
          <Typography text={heading} useCurrentColor />
        </div>
        <div className='flex flex-col items-center lg:items-start lg:block lg:col-start-6 col-span-5 px-8'>
          <Typography type='body' text={body} className='text-center lg:text-left' useCurrentColor />
          <CTAButtons primaryCTA={primaryCTA} secondaryCTA={secondaryCTA} useCurrentColor className='mt-4 lg:mt-6' />
        </div>
      </div>
    </section>
  );
};

export { HeaderDividerBlock };
