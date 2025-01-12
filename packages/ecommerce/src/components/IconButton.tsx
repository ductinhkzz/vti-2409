import { cn } from '@/lib';
import { Button, ButtonProps, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui';
import { forwardRef } from 'react';

type Props = ButtonProps & {
  title: string;
};

const IconButton = forwardRef<HTMLButtonElement, Props>(({ title, children, className, ...rest }, ref) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline' size='icon' className={cn('h-8 w-8', className)} {...rest} ref={ref}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

export { IconButton };
