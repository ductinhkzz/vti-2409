import { ShoppingCart, X } from 'lucide-react';

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
  IconButton,
  LoadingWrapper,
  ProductOrderCart,
  Separator,
} from '@/components';
import { useCart } from '@/hooks';
import { formattedNumber } from '@/utils';

const Cart = () => {
  const { cart, isLoading } = useCart();
  const total = cart?.productOrders.reduce((acc, curr) => acc + curr.amount * curr.productVariant.price, 0);

  return (
    <Drawer direction='right' aria-describedby='cart'>
      <DrawerTrigger asChild>
        <Button size='sm' className='bg-black dark:text-white'>
          <ShoppingCart />
          <span className='hidden sm:block'>Cart</span>
        </Button>
      </DrawerTrigger>
      <DrawerOverlay />
      <LoadingWrapper loading={isLoading}>
        <DrawerContent className='h-full max-w-xl w-full left-auto' hideDot aria-describedby='cart'>
          <div className='h-full w-full grow p-2 flex flex-col'>
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
            <ProductOrderCart productOrders={cart?.productOrders} />
            <p className='text-right mt-2'>Total: {formattedNumber(total)}</p>
          </div>
        </DrawerContent>
      </LoadingWrapper>
    </Drawer>
  );
};

export default Cart;
