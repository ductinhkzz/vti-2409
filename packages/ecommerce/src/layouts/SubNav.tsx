import { Moon, ShoppingCart, Sun, UserRound } from 'lucide-react';

import { Button } from '@/components';
import { useTheme } from '@/hooks';
import { Link } from 'react-router-dom';

const SubNav = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className='w-full h-12 flex justify-center bg-black border-y border-t-0'>
      <div className='max-w-5xl px-4 py-2 w-full'>
        <div className='flex justify-end w-full'>
          <nav className='flex items-center text-sm justify-between'>
            <Button size='sm' className='bg-black dark:text-white'>
              <ShoppingCart /> Cart
            </Button>
            <Button size='sm' asChild className='bg-black dark:text-white'>
              <Link to='/login'>
                <UserRound /> Login
              </Link>
            </Button>
            <Button size='sm' className='bg-black dark:text-white' onClick={toggleTheme}>
              {theme === 'light' ? (
                <>
                  <Moon /> Dark
                </>
              ) : (
                <>
                  <Sun /> Light
                </>
              )}
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
