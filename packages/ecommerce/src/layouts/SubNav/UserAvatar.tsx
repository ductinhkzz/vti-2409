import { Link } from 'react-router-dom';
import { LogOut, UserPen, UserRound } from 'lucide-react';

import { useUser } from '@/hooks';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components';

const UserAvatar = () => {
  const [user, setUser] = useUser();

  const onLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <Button size='sm' asChild className='bg-black dark:text-white'>
        <Link to='/login'>
          <UserRound />
          <span className='hidden sm:block'>Login</span>
        </Link>
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='sm' className='bg-black dark:text-white focus-visible:ring-0'>
          <UserRound />
          <span className='hidden sm:block'>{user.username}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-36'>
        <DropdownMenuItem>
          <UserPen />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
