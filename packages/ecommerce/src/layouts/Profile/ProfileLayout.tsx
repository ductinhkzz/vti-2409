import { Navigate, Outlet } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle, Separator } from '@/components';
import { useUser } from '@/hooks';
import { Sidebar } from './Sidebar';

const ProfileLayout = () => {
  const { user, isLoading, jwt } = useUser();
  const name = user?.name ?? user?.username;

  if ((!user && isLoading === false) || !jwt) {
    return <Navigate to='/404' />;
  }

  return (
    <div className='flex justify-center p-8'>
      <div className='max-w-5xl w-full'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>Hi {name}</CardTitle>
          </CardHeader>
          <Separator className='mb-6' />
          <CardContent className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
            <aside className='lg:w-1/5'>
              <Sidebar />
            </aside>
            <div className='flex-1 lg:max-w-2xl'>
              <Outlet />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { ProfileLayout };
