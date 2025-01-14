import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Card, CardContent, CardHeader, CardTitle, Input, Label } from '@/components';
import { registerSchema, RegisterSchemaType } from './schema';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    mode: 'onBlur',
    resolver: zodResolver(registerSchema),
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
          <CardTitle className='text-xl sm:text-2xl text-center'>Create new account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='grid gap-4' onSubmit={onSubmit}>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Name</Label>
              <Input type='text' placeholder='Ex: Đức Tịnh' {...register('name')} />
              {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='username'>Username</Label>
              <Input type='text' placeholder='Ex: ductinh97' {...register('username')} />
              {errors.username && <p className='text-red-500 text-xs'>{errors.username.message}</p>}
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input type='email' placeholder='Ex: m@example.com' {...register('email')} />
              {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
            </div>

            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
              </div>
              <Input type='password' placeholder='Password' {...register('password')} />
              {errors.password && <p className='text-red-500 text-xs'>{errors.password.message}</p>}
            </div>

            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='confirm_password'>Confirm Password</Label>
              </div>
              <Input type='password' placeholder='Confirm password' {...register('confirm_password')} />
              {errors.confirm_password && <p className='text-red-500 text-xs'>{errors.confirm_password.message}</p>}
            </div>

            <Button type='submit' className='w-full'>
              Register
            </Button>
          </form>
          <div className='mt-4 text-center text-xs sm:text-sm'>
            <Link to='/login' className='underline'>
              Already have an account?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
