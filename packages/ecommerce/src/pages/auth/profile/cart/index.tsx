import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, LoadingWrapper, ProductOrderCart } from '@/components';
import { useCart, useToast, useToggle } from '@/hooks';
import { formattedNumber } from '@/utils';
import { Checkout } from './components';

const Cart = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [isCheckout, , , show] = useToggle();
  const { cart, isLoading, isUpdated, handleUpdateOrder } = useCart();
  const total = cart?.productOrders.reduce((acc, curr) => acc + curr.amount * curr.productVariant.price, 0);
  const isCanOrder = total !== 0 && Boolean(address);

  const onChangeAddress = (val: string) => {
    setAddress(val);
  };

  const onPlaceOrder = () => {
    if (address) {
      handleUpdateOrder({
        total,
        address,
        documentId: cart.documentId,
      });
    }
  };

  useEffect(() => {
    if (isUpdated) {
      toast({ title: 'Order', description: 'Order successfully!' });
      navigate('/order', { replace: true });
    }
  }, [isUpdated]);

  return (
    <LoadingWrapper loading={isLoading}>
      <ProductOrderCart productOrders={cart?.productOrders} />
      {cart && (
        <>
          <p className='text-right my-2'>Total: {formattedNumber(total)}</p>
          {!isCheckout && cart?.productOrders.length > 0 && (
            <div className='flex justify-end'>
              <Button onClick={show} size='sm'>
                Checkout
              </Button>
            </div>
          )}
          {isCheckout && (
            <>
              <Checkout onChange={onChangeAddress} val={address} />
              <div className='mt-4 flex justify-end'>
                <Button disabled={!isCanOrder} size='sm' onClick={onPlaceOrder}>
                  Place order
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </LoadingWrapper>
  );
};

export default Cart;
