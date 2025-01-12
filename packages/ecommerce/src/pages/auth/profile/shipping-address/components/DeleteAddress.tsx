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
} from '@/components';
import { useToast, useToggle } from '@/hooks';
import { useDeleteAddressMutation } from '@/redux';
import { useEffect } from 'react';

type Props = {
  children: React.ReactNode | JSX.Element;
  documentId: string;
};

const DeleteAddress = ({ children, documentId }: Props) => {
  const { toast } = useToast();
  const [open, , setOpen, , hide] = useToggle();
  const [deleteAddress, { isLoading, isSuccess }] = useDeleteAddressMutation();

  const onDelete = () => {
    deleteAddress({ id: documentId });
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: 'Address',
        description: 'The address has been deleted successfully',
      });
      hide();
    }
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-lg'>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. This will permanently delete the address.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <ButtonLoading variant='destructive' size='sm' isLoading={isLoading} onClick={onDelete}>
            Delete
          </ButtonLoading>
          <Button size='sm' variant='secondary' type='button' onClick={hide}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAddress;
