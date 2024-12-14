import { Link } from 'react-router-dom';

import { LogoIcon } from '@/components';
import { MAIN_NAV_ITEMS } from '@/constants';
import { cn } from '@/lib';
import MobileNav from './MobileNav';

const ORDER_CLASSES: Record<number, string> = {
  0: 'order-0',
  1: 'order-1',
  2: 'order-2',
  3: 'order-3',
  4: 'order-4',
  5: 'order-5',
  6: 'order-6',
};

const MainNav = () => {
  return (
    <div className='w-full h-14 flex justify-center border-y border-t-0'>
      <div className='max-w-5xl flex items-center px-4 w-full justify-between'>
        <div className='hidden md:flex w-full'>
          <nav className='flex items-center md:gap-4 text-sm xl:gap-6 justify-between w-full'>
            <Link to='/' className='flex items-center lg:px-4 order-3'>
              <LogoIcon className='h-4 lg:h-6 w-fit' />
            </Link>
            {MAIN_NAV_ITEMS.map(({ href, label }, index) => (
              <Link
                key={href}
                to={href}
                className={cn(
                  'transition-colors hover:text-foreground/80 px-2 text-xs lg:text-sm lg:px-4 py-2',
                  ORDER_CLASSES[index],
                )}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <MobileNav />
      </div>
    </div>
  );
};

export default MainNav;
