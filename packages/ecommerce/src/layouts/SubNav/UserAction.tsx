import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, UserPen, UserRound } from 'lucide-react';

import { useRedux, useToast, useUser } from '@/hooks';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  UserAvatar,
} from '@/components';
import { logout } from '@/redux/auth';
import { getMediaUrl } from '@/utils';

const PRAVITE_ROUTES = ['/profile'];

const UserAction = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useRedux();
  const { toast } = useToast();
  const { user } = useUser();

  const onLogout = () => {
    dispatch(logout());
    toast({ description: 'Logout successfully !' });
    if (PRAVITE_ROUTES.includes(location.pathname)) {
      navigate('/', { replace: true });
    }
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

  const name = user.name ?? user.username;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='sm' className='bg-black dark:text-white focus-visible:ring-0'>
          <UserAvatar url={getMediaUrl(user.avatar?.url)} alt={name} />
          <span className='hidden sm:block'>{name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-36'>
        <DropdownMenuItem asChild>
          <Link to='/profile'>
            <UserPen />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={onLogout}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAction;
