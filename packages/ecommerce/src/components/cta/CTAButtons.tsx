import { ICTA } from '@/types';
import { cn } from '@/lib';
import { CTAButton } from './CTAButton';

type Props = Record<'primaryCTA' | 'secondaryCTA', ICTA | null> & {
  className?: string;
  useCurrentColor?: boolean;
};

const CTAButtons = ({ primaryCTA, secondaryCTA, className, useCurrentColor }: Props) => {
  if (!primaryCTA && !secondaryCTA) {
    return null;
  }

  return (
    <div className={cn('flex gap-2', className)}>
      <CTAButton data={primaryCTA} type='primary' useCurrentColor={useCurrentColor} />
      <CTAButton data={secondaryCTA} useCurrentColor={useCurrentColor} />
    </div>
  );
};

export { CTAButtons };
