import { Link } from 'react-router-dom';
import { Moon, ShoppingCart, Sun } from 'lucide-react';

import { Badge, Button } from '@/components';
import { useCart, useTheme } from '@/hooks';
import UserAction from './UserAction';

const SubNav = () => {
  const [theme, toggleTheme] = useTheme();
  const { cartItemCount } = useCart();

  return (
    <div className='w-full h-12 flex justify-center bg-black border-y border-t-0'>
      <div className='max-w-5xl px-4 py-2 w-full'>
        <div className='flex justify-end w-full'>
          <nav className='flex items-center text-sm justify-between'>
            <Button size='sm' className='bg-black dark:text-white relative' asChild>
              <Link to='/cart'>
                <ShoppingCart />
                <span className='hidden sm:block'>Cart</span>
                {cartItemCount > 0 && (
                  <Badge
                    variant='outline'
                    className='absolute -top-1 -right-1 flex justify-center items-center p-0 bg-white text-black w-4 h-4 text-xs'
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>
            <UserAction />
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
