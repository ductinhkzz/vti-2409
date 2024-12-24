import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
  LogoIcon,
} from '@/components';
import { MAIN_NAV_ITEMS } from '@/constants';

const MobileNav = () => {
  return (
    <nav className='w-full flex justify-between md:hidden'>
      <Link to='/' className='flex items-center lg:px-4'>
        <LogoIcon className='h-4 lg:h-6 w-fit' />
      </Link>

      <Drawer direction='right'>
        <DrawerTrigger asChild>
          <Button variant='outline' size='icon'>
            <AlignJustify />
          </Button>
        </DrawerTrigger>
        <DrawerOverlay />
        <DrawerContent className='h-full' hideDot aria-describedby='mobile-nav'>
          <div className='h-full w-full grow p-5 flex flex-col'>
            <DrawerTitle className='font-medium mb-2 text-zinc-900 px-4'>Menu</DrawerTitle>
            {MAIN_NAV_ITEMS.map(({ href, label }) => (
              <DrawerClose asChild key={href}>
                <Link
                  to={href}
                  target='_top'
                  className='transition-colors hover:text-foreground/80 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-lg px-4 py-2 rounded'>
                  {label}
                </Link>
              </DrawerClose>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default MobileNav;
