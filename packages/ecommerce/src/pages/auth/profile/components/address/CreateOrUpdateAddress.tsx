import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  ButtonLoading,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@/components';
import { IAddress, useCreateAddressMutation, useUpdateAddressMutation } from '@/redux';
import { addressSchema, AddressSchemaType } from '../../schema';
import { useToast, useToggle } from '@/hooks';

type Props = {
  type?: 'create' | 'update';
  address?: IAddress;
  children?: React.ReactNode | JSX.Element;
};

const CreateOrUpdateAddress = ({ type = 'create', children, address }: Props) => {
  const { toast } = useToast();
  const [open, , setOpen, , hide] = useToggle();
  const isCreate = type === 'create';
  const [create, { isLoading, isSuccess }] = useCreateAddressMutation();
  const [edit, { isLoading: isEditLoading, isSuccess: isEditSuccess }] = useUpdateAddressMutation();

  const form = useForm<AddressSchemaType>({
    resolver: zodResolver(addressSchema),
    defaultValues: address,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  const onClose = useCallback(() => {
    hide();
    reset();
  }, [reset, hide]);

  const onSubmit = handleSubmit((data) => {
    if (type === 'update') {
      edit({ data, id: address?.documentId });
    } else {
      create({ data });
    }
  });

  useEffect(() => {
    if (isSuccess) {
      toast({ title: 'Shipping address', description: 'Creating address successfully' });
      onClose();
    }
  }, [isSuccess, onClose]);

  useEffect(() => {
    if (isEditSuccess) {
      toast({ title: 'Shipping address', description: 'Updating address successfully' });
      onClose();
    }
  }, [isEditSuccess, onClose]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <form onSubmit={onSubmit} className='space-y-6'>
          <DialogHeader>
            <DialogTitle>{isCreate ? 'New address' : 'Edit address'}</DialogTitle>
            <DialogDescription>
              {isCreate ? 'Create a new address to your profile here.' : 'Update a address to your profile here.'} Click
              save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='firstName'>First name</Label>
                <Input {...register('firstName')} />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='lastName'>Last name</Label>
                <Input {...register('lastName')} />
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='phone'>Phone</Label>
              <Input {...register('phone')} />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='address'>Address</Label>
              <Input {...register('address1')} />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='company'>Company</Label>
              <Input {...register('company')} />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='city'>City</Label>
                <Input {...register('city')} />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='province'>Province</Label>
                <Input {...register('province')} />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='postalCode'>Postal code</Label>
                <Input {...register('postalCode')} />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='country'>Country</Label>
                <Input {...register('country')} />
              </div>
            </div>
          </div>
          <DialogFooter>
            <ButtonLoading
              type='submit'
              size='sm'
              isLoading={isLoading || isEditLoading}
              disabled={!isDirty || !isValid}
            >
              {isCreate ? 'Create' : 'Save'}
            </ButtonLoading>
            <Button size='sm' variant='outline' onClick={() => reset()} disabled={!isDirty}>
              Reset
            </Button>
            <Button size='sm' variant='secondary' type='button' onClick={onClose}>
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { CreateOrUpdateAddress };
