import { Moon, ShoppingCart, Sun } from 'lucide-react';

import { Button } from '@/components';
import { useTheme } from '@/hooks';
import UserAvatar from './UserAvatar';

const SubNav = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className='w-full h-12 flex justify-center bg-black border-y border-t-0'>
      <div className='max-w-5xl px-4 py-2 w-full'>
        <div className='flex justify-end w-full'>
          <nav className='flex items-center text-sm justify-between'>
            <Button size='sm' className='bg-black dark:text-white'>
              <ShoppingCart />
              <span className='hidden sm:block'>Cart</span>
            </Button>
            <UserAvatar />
            <Button size='sm' className='bg-black dark:text-white' onClick={toggleTheme}>
              {theme === 'light' ? <Moon /> : <Sun />}
              <span className='hidden sm:block'>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { SubNav };
