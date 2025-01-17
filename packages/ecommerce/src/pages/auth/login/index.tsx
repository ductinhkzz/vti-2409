import { useCallback, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Button,
  ButtonLoading,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ErrorAlert,
  Input,
  Label,
} from '@/components';
import { loginSchema, LoginSchemaType } from './schema';
import { useLoginMutation, useResendEmailMutation } from '@/redux';
import { useToast } from '@/hooks';
import { parseParams } from '@/utils';
import { Resend } from '../components';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queries = parseParams(searchParams);
  const [login, { isSuccess, isLoading, error, isError }] = useLoginMutation();
  const [resend, { isLoading: isSending, isSuccess: isSent }] = useResendEmailMutation();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: queries.email ?? '',
      password: '',
    },
  });

  const loading = isSending || isLoading;
  const email = watch('email');
  const errorMsg = (error as any)?.data?.error?.message;
  const isEmailNotConfirmed = errorMsg === 'Your account email is not confirmed';

  const onSubmit = handleSubmit((formData) => {
    login({ identifier: formData.email, password: formData.password });
  });

  const onSend = useCallback(() => {
    if (email) {
      resend({ email });
    }
  }, [email]);

  useEffect(() => {
    if (isSuccess) {
      toast({ title: 'Login', description: 'Login successfully' });
      navigate(queries.redirect ?? '/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError && isEmailNotConfirmed && !isSent) {
      onSend();
    }
  }, [isError, isEmailNotConfirmed, onSend, isSent]);

  return (
    <div className='flex justify-center items-center p-4 sm:p-0'>
      <Card className='mx-auto max-w-sm w-full my-24 sm:my-48'>
        <CardHeader>
          <CardTitle className='text-xl sm:text-2xl text-center'>Login</CardTitle>
          <CardDescription>
            <ErrorAlert show={isError}>
              <p>{errorMsg}</p>
              {isEmailNotConfirmed && (
                <>
                  <p>Please check your mail box to confirm</p>
                  <Resend onClick={onSend} isLoading={isSending} isSuccess={isSent} className='justify-start' />
                </>
              )}
            </ErrorAlert>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='grid gap-4' onSubmit={onSubmit}>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' placeholder='m@example.com' {...register('email')} />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <Link to='/forgot-password' className='ml-auto inline-block text-xs sm:text-sm underline'>
                  Forgot your password?
                </Link>
              </div>
              <Input type='password' {...register('password')} />
            </div>
            <ButtonLoading type='submit' className='w-full' disabled={!isValid} isLoading={loading}>
              Login
            </ButtonLoading>
            <Button variant='outline' asChild={true} className='w-full'>
              <a className='cursor-pointer' href={`${import.meta.env.VITE_API_URL}/connect/google`}>
                Login with Google
              </a>
            </Button>
            <Button variant='outline' asChild={true} className='w-full'>
              <a className='cursor-pointer' href={`${import.meta.env.VITE_API_URL}/connect/facebook`}>
                Login with Facebook
              </a>
            </Button>
          </form>
          <div className='mt-4 text-center text-xs sm:text-sm'>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='underline'>
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
