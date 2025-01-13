import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from '@/components';
import { loginSchema, LoginSchemaType } from './schema';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((formData) => {
    console.log('==========formData==================');
    console.log(formData);
    console.log('============================');
  });

  return (
    <div className='flex justify-center items-center p-4 sm:p-0'>
      <Card className='mx-auto max-w-sm w-full my-24 sm:my-48'>
        <CardHeader>
          <CardTitle className='text-xl sm:text-2xl text-center'>Login</CardTitle>
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
            <Button type='submit' className='w-full' disabled={!isValid}>
              Login
            </Button>
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
            <Link to='/register'  className='underline'>
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
