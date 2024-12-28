import { IBlock } from '@/redux/types';
import { Typography } from '../Typography';
import { CTAButtons } from '../cta';
import { cn } from '@/lib';
import { getThemeClass } from '@/utils';

const TYPOGRAPHY_ITEMS: Array<{ type: 'eyeBrow' | 'heading' | 'body'; className: string }> = [
  {
    type: 'eyeBrow',
    className: 'mb-4',
  },
  {
    type: 'heading',
    className: 'mb-2 sm:mb-4 lg:mb-6',
  },
  {
    type: 'body',
    className: 'mb-2 text-center',
  },
];

const TextBlock = ({ primaryCTA, secondaryCTA, theme, ...props }: IBlock) => {
  const bg = getThemeClass(theme);
  const items = TYPOGRAPHY_ITEMS.filter((item) => props[item.type]);
  return (
    <section className={cn('relative w-full flex justify-center', bg)}>
      <div className='flex justify-center flex-col h-full p-8 lg:p-16 xl:p-0 items-center max-w-lg my-8 lg:my-16'>
        {items.map((item, i) => {
          const isLast = i === items.length - 1 && !primaryCTA && !secondaryCTA;
          return (
            <Typography
              key={item.type}
              type={item.type}
              text={props[item.type]}
              className={cn(!isLast && item.className)}
              useCurrentColor
            />
          );
        })}
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
