import { useEffect, useState } from 'react';

import { ButtonLoading } from '@/components';
import { cn } from '@/lib';

type Props = {
  onClick: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  className?: string;
};

const Resend = ({ onClick, isLoading, isSuccess, className }: Props) => {
  const [countdown, setCountdown] = useState(30);

  const handleClick = () => {
    onClick();
    setCountdown(30);
  };

  useEffect(() => {
    if (countdown > 0 && isSuccess) {
      const timer = setTimeout(() => {
        setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, isSuccess]);

  return (
    <p className={cn('text-sm flex justify-center items-center', className)}>
      Did not receive the email?{' '}
      <ButtonLoading className='ml-2' size='sm' onClick={handleClick} isLoading={isLoading} disabled={countdown > 0}>
        Resend {countdown > 0 ? `in ${countdown}s` : ''}
      </ButtonLoading>
    </p>
  );
};

export { Resend };
