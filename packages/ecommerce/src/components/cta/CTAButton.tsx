import { Link } from 'react-router-dom';
import { CircleChevronRight } from 'lucide-react';

import { ICTA } from '@/redux/types';
import { Button } from '../ui';
import { cn } from '@/lib';

type Props = {
  data: ICTA | null;
  type?: 'primary' | 'secondary';
  useCurrentColor?: boolean;
  component?: 'div' | 'span';
  className?: string;
};

const CTAButton = ({ data, type = 'secondary', useCurrentColor, component, className }: Props) => {
  if (!data) {
    return null;
  }

  const Comp = component ?? Link;

  if (type === 'primary') {
    return (
      <Button
        variant='outline'
        size='sm'
        className={cn(
          'bg-transparent text-[0.625rem] sm:text-xs',
          !useCurrentColor && 'text-white border-white',
          useCurrentColor && 'border-gray-700 dark:border-white',
          className,
        )}
        asChild
      >
        <Comp to={data.url} target={data.target}>
          {data.title}
        </Comp>
      </Button>
    );
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      className={cn(
        'text-[0.625rem] sm:text-xs hover:border hover:border-gray-700 dark:hover:border-white',
        !useCurrentColor && 'text-white',
        className,
      )}
      asChild
    >
      <Comp to={data.url} target={data.target}>
        {data.title}
        <CircleChevronRight />
      </Comp>
    </Button>
  );
};

export { CTAButton };
