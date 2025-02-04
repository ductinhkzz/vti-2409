import { Label, RadioGroup, RadioGroupItem, Typography } from '@/components';
import { useUser } from '@/hooks';
import { useGetAddressesQuery } from '@/redux';
import { AddressCard, CreateAddressCard } from '../../components';

type Props = {
  onChange: (val: string) => void;
  val?: string;
};

const Checkout = ({ onChange, val }: Props) => {
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
    <div>
      <Typography text='Address' type='heading' useCurrentColor className='my-2' fixedSize='text-lg' />
      <RadioGroup className='grid grid-cols-2' onValueChange={onChange} defaultValue={val}>
        {data.map((address) => (
          <div key={address.id}>
            <RadioGroupItem
              value={address.documentId}
              id={address.documentId}
              className='peer sr-only'
              aria-label='Card'
            />
            <Label
              htmlFor={address.documentId}
              className='flex flex-col rounded-md border-2 border-muted bg-transparent hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
              <AddressCard address={address} className='shadow-none border-0 bg-transparent' />
            </Label>
          </div>
        ))}
        <CreateAddressCard />
      </RadioGroup>
    </div>
  );
};

export { Checkout };
