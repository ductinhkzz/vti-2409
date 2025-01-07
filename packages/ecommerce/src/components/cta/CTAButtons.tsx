import { ICTA } from '@/redux/types';
import { cn } from '@/lib';
import { CTAButton } from './CTAButton';

type Props = Record<'primaryCTA' | 'secondaryCTA', Pick<ICTA, 'url' | 'target' | 'title'> | null> & {
  className?: string;
  useCurrentColor?: boolean;
  primaryBtnClass?: string;
  secondaryBtnClass?: string;
};

const CTAButtons = ({
  primaryCTA,
  secondaryCTA,
  className,
  useCurrentColor,
  primaryBtnClass,
  secondaryBtnClass,
}: Props) => {
  if (!primaryCTA && !secondaryCTA) {
    return null;
  }

  return (
    <div className={cn('flex gap-2', className)}>
      <CTAButton data={primaryCTA} type='primary' useCurrentColor={useCurrentColor} className={primaryBtnClass} />
      <CTAButton data={secondaryCTA} useCurrentColor={useCurrentColor} className={secondaryBtnClass} />
    </div>
  );
};

export { CTAButtons };
