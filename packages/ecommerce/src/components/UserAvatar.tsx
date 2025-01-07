import { cn } from '@/lib';
import { Avatar, AvatarFallback, AvatarImage } from './ui';

type Props = {
  url?: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'lg';
};

const SIZES: Record<'sm' | 'lg', Record<'size' | 'text', string>> = {
  sm: {
    size: 'h-6 w-6',
    text: 'text-sm',
  },
  lg: {
    size: 'h-16 w-16',
    text: 'text-3xl',
  },
};

const UserAvatar = ({ url, alt, className, size = 'sm' }: Props) => {
  const classes = SIZES[size];
  return (
    <Avatar className={cn(classes.size, className)}>
      <AvatarImage src={url} alt={alt} />
      <AvatarFallback className={cn('font-bold', classes.text)}>{alt?.charAt(0).toLocaleUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export { UserAvatar };
