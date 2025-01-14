import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, ButtonLoading, Card, CardContent, CardDescription, CardHeader, CardTitle, Input } from '@/components';
import { forgotPasswordSchema, ForgotPasswordSchemaType } from './schema';
import { useForgotPasswordMutation } from '@/redux/auth';
import { Resend } from '../components';

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, isSuccess }] = useForgotPasswordMutation();
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

  return (
    <div className='flex justify-center items-center p-4 sm:p-0'>
      <Card className='mx-auto max-w-sm w-full my-24 sm:my-48'>
        <CardHeader>
          <CardTitle className='text-xl sm:text-2xl text-center'>Forgot your password?</CardTitle>
          <CardDescription className='text-center'>
            {!isSuccess &&
              `Enter the email address associated with your account and we'll send you a link to reset your password.`}
            {isSuccess && 'Please check your email to reset password.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <Resend onClick={onSubmit} isLoading={isLoading} isSuccess={isSuccess} />
          ) : (
            <form className='grid gap-4' onSubmit={onSubmit}>
              <div className='grid gap-2'>
                <Input type='email' placeholder='Emter email' {...register('email')} />
              </div>
              <ButtonLoading type='submit' className='w-full' disabled={!isValid} isLoading={isLoading}>
                Reset password
              </ButtonLoading>
              <Button variant='outline' className='w-full'>
                <Link to='/login'>Back to login</Link>
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
