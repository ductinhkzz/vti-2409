import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { omit } from 'lodash-es';

import {
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
import { registerSchema, RegisterSchemaType } from './schema';
import { useRegisterMutation, useResendEmailMutation } from '@/redux';
import { useToast } from '@/hooks';
import { cn } from '@/lib';
import { Resend } from '../components';

const Register = () => {
  const { toast } = useToast();
  const [register, { isLoading, isSuccess }] = useRegisterMutation();
  const [resend, { isLoading: isSending, isSuccess: isSent }] = useResendEmailMutation();
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    mode: 'all',
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const {
    handleSubmit,
    watch,
    control,
    formState: { isDirty, isValid },
  } = form;

  const email = watch('email');

  const onSubmit = handleSubmit((formData) => {
    register(omit(formData, ['confirmPassword']));
  });

  const onResend = () => {
    if (email) {
      resend({ email });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast({ title: 'Register', description: 'Register successfully' });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSent) {
      toast({ title: 'Confirmation', description: 'Send mail successfully!' });
    }
  }, [isSent]);
  return (
    <div className='flex justify-center items-center p-4 sm:p-0'>
      <Card className='mx-auto max-w-sm w-full my-20 sm:my-32'>
        <CardHeader>
          <CardTitle className={cn('text-xl sm:text-2xl text-center', isSuccess && 'text-left')}>
            {isSuccess ? 'Register successfully!' : 'Create new account'}
          </CardTitle>
          {isSuccess && <CardDescription>Please check your email to complete account</CardDescription>}
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <Resend onClick={onResend} isLoading={isSending} isSuccess={isSuccess} />
          ) : (
            <>
              <Form {...form}>
                <form className='grid gap-4' onSubmit={onSubmit}>
                  <FormField
                    control={control}
                    name='username'
                    render={({ field }) => (
                      <div className='grid gap-2'>
                        <Label htmlFor='username'>Username</Label>
                        <Input type='text' id='username' {...field} />
                        <FormMessage />
                      </div>
                    )}
                  />
                  <FormField
                    control={control}
                    name='email'
                    render={({ field }) => (
                      <div className='grid gap-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='email' id='email' placeholder='Ex: m@example.com' {...field} />
                        <FormMessage />
                      </div>
                    )}
                  />
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
                    name='confirmPassword'
                    render={({ field }) => (
                      <div className='grid gap-2'>
                        <Label htmlFor='confirmPassword'>Confirm Password</Label>
                        <Input type='password' id='confirmPassword' {...field} />
                        <FormMessage />
                      </div>
                    )}
                  />
                  <ButtonLoading type='submit' className='w-full' isLoading={isLoading} disabled={!isDirty || !isValid}>
                    Register
                  </ButtonLoading>
                </form>
              </Form>
              <div className='mt-4 text-center text-xs sm:text-sm'>
                <Link to='/login' className='underline'>
                  Already have an account?
                </Link>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
