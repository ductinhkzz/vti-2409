import { X } from 'lucide-react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerTitle,
  IconButton,
  LoadingWrapper,
  Separator,
} from '@/components';
import { useCart } from '@/hooks';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CartDrawer = ({ open, onClose }: Props) => {
  const { cart, isLoading } = useCart();
  return (
    <LoadingWrapper loading={isLoading}>
      <Drawer direction='right' aria-describedby='cart' open={open} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className='h-full max-w-xl w-full left-auto' hideDot aria-describedby='cart'>
          <div className='h-full w-full grow p-5 flex flex-col'>
            <DrawerTitle className='font-medium pb-4 flex justify-between items-center'>
              Cart
              <DrawerClose asChild>
                <IconButton title='Close' variant='ghost'>
                  <X />
                </IconButton>
              </DrawerClose>
            </DrawerTitle>
            <DrawerDescription className='hidden'>Show cart content</DrawerDescription>
            <Separator className='mb-4' />
            <div>{cart && 'No items in cart'}</div>
          </div>
        </DrawerContent>
      </Drawer>
    </LoadingWrapper>
  );
};

export default CartDrawer;
