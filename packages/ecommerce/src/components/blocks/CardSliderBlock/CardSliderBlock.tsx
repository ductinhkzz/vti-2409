import { IBlock } from '@/types';
import { Typography } from '@/components/Typography';
import { CTAButton } from '@/components/cta';
import { CardListBlock } from './CardListBlock';

const CardSliderBlock = (props: IBlock) => {
  const { heading, link } = props;
  return (
    <CardListBlock {...props} isSlider>
      <div className='flex flex-col items-center mb-6'>
        <Typography text={heading} fixedSize='text-lg tracking-[0.2em] uppercase' useCurrentColor />
        <CTAButton data={link} useCurrentColor className='w-fit' />
      </div>
    </CardListBlock>
  );
};

export { CardSliderBlock };
