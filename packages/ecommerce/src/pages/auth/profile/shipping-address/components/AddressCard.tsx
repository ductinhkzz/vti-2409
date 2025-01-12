import { Pencil, Trash } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle, IconButton, Typography } from '@/components';
import { IAddress } from '@/redux';
import { CreateOrUpdateAddress } from './CreateOrUpdateAddress';
import DeleteAddress from './DeleteAddress';

type Props = {
  address: IAddress;
};

const AddressCard = ({ address }: Props) => {
  const { firstName, lastName, address1, address2, postalCode, city, province, country, phone, company } = address;
  return (
    <Card>
      <CardHeader className='p-4'>
        <CardTitle>
          {firstName} {lastName}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4 pt-0'>
        <div>
          <Typography text={`Phone: ${phone}`} type='body' useCurrentColor />
          <Typography text={[address1, address2, company].filter(Boolean).join(', ')} type='body' useCurrentColor />
          <Typography text={`${postalCode}, ${city}`} type='body' useCurrentColor />
          <Typography text={`${province}, ${country}`} type='body' useCurrentColor />
        </div>
      </CardContent>
      <CardFooter className='p-4 pt-0 flex gap-2 justify-end'>
        <CreateOrUpdateAddress type='update' address={address}>
          <IconButton title='Edit'>
            <Pencil />
          </IconButton>
        </CreateOrUpdateAddress>
        <DeleteAddress documentId={address.documentId}>
          <IconButton title='Delete'>
            <Trash />
          </IconButton>
        </DeleteAddress>
      </CardFooter>
    </Card>
  );
};

export { AddressCard };
