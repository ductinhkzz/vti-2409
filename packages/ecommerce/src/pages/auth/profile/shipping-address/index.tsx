import { useUser } from '@/hooks';
import { useGetAddressesQuery } from '@/redux';
import { AddressCard, CreateAddressCard } from './components';

const ShippingAddress = () => {
  const { user } = useUser();
  const { data = [] } = useGetAddressesQuery(
    {
      user: user?.id,
    },
    {
      skip: !user?.id,
    },
  );

  return (
    <div className='grid grid-cols-2 gap-4'>
      {data.map((address) => (
        <AddressCard key={address.documentId} address={address} />
      ))}
      <CreateAddressCard />
    </div>
  );
};

export default ShippingAddress;
