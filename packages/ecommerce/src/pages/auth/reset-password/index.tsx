import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import {
  Button,
  ButtonLoading,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormField,
  FormMessage,
  Input,
  Label,
} from '@/components';
import { resetPasswordSchema, ResetPasswordSchemaType } from './schema';
import { useResetPasswordMutation } from '@/redux/auth';
import { useToast } from '@/hooks';
import { parseParams, stringify } from '@/utils';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const queries = parseParams<{ code: string }>(searchParams);

  const { toast } = useToast();
  const navigate = useNavigate();
  const [resetPassword, { isLoading, isSuccess, data }] = useResetPasswordMutation();
  const form = useForm<ResetPasswordSchemaType>({
    mode: 'all',
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = form;

  const onSubmit = handleSubmit((formData) => {
    resetPassword({ ...formData, ...queries });
  });

  useEffect(() => {
    if (isSuccess) {
      toast({ title: 'Account', description: 'Reset password successfully!' });
      navigate(`/login?${stringify({ email: data.user.email })}`);
    }
  }, [isSuccess, data?.user.email]);

  return (
    <div className='flex justify-center items-center p-4 sm:p-0'>
      <Card className='mx-auto max-w-sm w-full my-24 sm:my-48'>
        <CardHeader>
          <CardTitle className='text-xl sm:text-2xl text-center'>Reset password</CardTitle>
          <CardDescription className='text-center'>Enter your new password to reset your password.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className='grid gap-4' onSubmit={onSubmit}>
              <FormField
                control={control}
                name='password'
                render={({ field }) => (
                  <div className='grid gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' id='password' {...field} />
                    <FormMessage />
                  </div>
                )}
              />
              <FormField
                control={control}
                name='passwordConfirmation'
                render={({ field }) => (
                  <div className='grid gap-2'>
                    <Label htmlFor='passwordConfirmation'>Confirm Password</Label>
                    <Input type='password' id='passwordConfirmation' {...field} />
                    <FormMessage />
                  </div>
                )}
              />
              <ButtonLoading type='submit' className='w-full' isLoading={isLoading} disabled={!isValid}>
                Save
              </ButtonLoading>

              <Button variant='outline' className='w-full'>
                <Link to='/forgot-password'>Back to forgot password</Link>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
