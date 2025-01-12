import { LoaderCircle } from 'lucide-react';
import { Button, ButtonProps } from './ui';

type Props = ButtonProps & {
  isLoading?: boolean;
};

const ButtonLoading = ({ isLoading, children, disabled, ...rest }: Props) => {
  return (
    <Button {...rest} disabled={isLoading || disabled}>
      {isLoading ? <LoaderCircle className='animate-spin text-gray-400 w-8 h-8' /> : children}
    </Button>
  );
};

export { ButtonLoading };
