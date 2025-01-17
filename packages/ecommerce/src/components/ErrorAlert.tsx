import { AlertCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './ui';

type Props = {
  children?: React.ReactNode | JSX.Element;
  show?: boolean;
};

const ErrorAlert = ({ children, show }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <Alert variant='destructive'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};

export { ErrorAlert };
