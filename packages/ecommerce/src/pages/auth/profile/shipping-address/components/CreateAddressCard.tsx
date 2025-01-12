import { Plus } from 'lucide-react';

import { Card, CardHeader, CardTitle } from '@/components';
import { CreateOrUpdateAddress } from './CreateOrUpdateAddress';

const CreateAddressCard = () => {
  return (
    <CreateOrUpdateAddress>
      <Card className='hover:cursor-pointer min-h-40'>
        <CardHeader className='p-4'>
          <CardTitle className='flex gap-2'>
            New address
            <Plus />
          </CardTitle>
        </CardHeader>
      </Card>
    </CreateOrUpdateAddress>
  );
};

export { CreateAddressCard };
