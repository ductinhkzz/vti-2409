import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useToast, useUser } from '@/hooks';
import { useUpdateProfileMutation } from '@/redux/auth';
import { UploadAvatar } from './components';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  LoadingWrapper,
  Separator,
} from '@/components';
import { profileSchema } from './schema';

const Profile = () => {
  const { toast } = useToast();
  const { user, isLoading } = useUser();
  const [updateProfile, { isLoading: isUpdating, isSuccess }] = useUpdateProfileMutation();

  const form = useForm({
    resolver: zodResolver(profileSchema),
    values: {
      name: user?.name ?? '',
      username: user?.username ?? '',
      email: user?.email ?? '',
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = form;

  const onSubmit = handleSubmit((d) => {
    if (user) updateProfile({ ...d, id: user.id });
  });

  useEffect(() => {
    if (isSuccess) {
      toast({ title: 'Profile', description: 'Update profile successfully!' });
    }
  }, [isSuccess, toast]);

  return (
    <LoadingWrapper loading={isLoading || isUpdating}>
      <div className='space-y-4'>
        <div>
          <h3 className='text-lg font-medium'>Profile</h3>
          <p className='text-sm text-muted-foreground'>Your account login by {user?.provider}</p>
        </div>
        <Separator />
        <UploadAvatar />
        <Separator />
        <Form {...form}>
          <form onSubmit={onSubmit} className='space-y-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Your name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='m@example.com' {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex gap-4'>
              <Button type='submit' size='sm' disabled={!isValid || !isDirty}>
                Update profile
              </Button>
              <Button variant='outline' size='sm' disabled={!isDirty} onClick={() => reset()}>
                Reset
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </LoadingWrapper>
  );
};

export default Profile;
