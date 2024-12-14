import { cn } from '@/lib';

type Props = {
  type?: 'heading' | 'subHeading' | 'eyeBrow' | 'body' | 'subTitle';
  text?: string | null;
  className?: string;
  useCurrentColor?: boolean;
  fixedSize?: string;
};

const Typography = ({ type = 'heading', text, className, useCurrentColor, fixedSize }: Props) => {
  switch (type) {
    case 'heading':
      return (
        <h2
          className={cn(
            'tracking-wide font-medium',
            !useCurrentColor && 'text-white',
            fixedSize ?? 'text-lg md:text-xl lg:text-3xl',
            className,
          )}>
          {text}
        </h2>
      );
    case 'eyeBrow':
      return (
        <p className={cn('uppercase text-xs tracking-widest font-normal', !useCurrentColor && 'text-white', className)}>
          {text}
        </p>
      );
    case 'subHeading':
      return <p className={cn('text-sm tracking-widest', !useCurrentColor && 'text-white', className)}>{text}</p>;
    case 'subTitle':
      return (
        <p className={cn('text-[0.5rem] tracking-widest font-light', !useCurrentColor && 'text-white', className)}>
          {text}
        </p>
      );
    case 'body':
      return (
        <p
          className={cn(
            'text-xs leading-5 tracking-wide',
            !useCurrentColor && 'text-white',
            useCurrentColor && 'text-gray-600 dark:text-white',
            className,
          )}>
          {text}
        </p>
      );
    default:
      return null;
  }
};

export { Typography };
