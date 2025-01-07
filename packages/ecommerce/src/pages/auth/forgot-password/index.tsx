import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from '@/components';
import { forgotPasswordSchema, ForgotPasswordSchemaType } from './schema';
import { useForgotPasswordMutation } from '@/redux/auth';

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, isSuccess, data }] = useForgotPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = handleSubmit((formData) => {
    forgotPassword(formData);
  });

  console.log(data, isLoading, isSuccess);

  return (
    <div className='flex justify-center items-center p-4 sm:p-0'>
      <Card className='mx-auto max-w-sm w-full my-24 sm:my-48'>
        <CardHeader>
          <CardTitle className='text-xl sm:text-2xl text-center'>Forgot your password?</CardTitle>
          <CardDescription className='text-center'>
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='grid gap-4' onSubmit={onSubmit}>
            <div className='grid gap-2'>
              <Input type='email' placeholder='Emter email' {...register('email')} />
            </div>
            <Button type='submit' className='w-full' disabled={!isValid}>
              Reset password
            </Button>
            <Button variant='outline' className='w-full'>
              <Link to='/login'>Back to login</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
