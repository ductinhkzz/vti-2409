import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AlignJustify } from 'lucide-react';

import { ICollection } from '@/redux/types';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
  LogoIcon,
} from '@/components';

export type MobileNavProps = {
  collections: ICollection[];
};

const MobileNav: FC<MobileNavProps> = ({ collections }) => {
  return (
    <nav className='w-full flex justify-between md:hidden'>
      <Link to='/' className='flex items-center lg:px-4'>
        <LogoIcon className='h-4 lg:h-6 w-fit' />
      </Link>

      <Drawer direction='right' aria-describedby='mobile-nav'>
        <DrawerTrigger asChild>
          <Button variant='outline' size='icon'>
            <AlignJustify />
          </Button>
        </DrawerTrigger>
        <DrawerOverlay />
        <DrawerContent className='h-full' hideDot aria-describedby='mobile-nav'>
          <div className='h-full w-full grow p-5 flex flex-col'>
            <DrawerTitle className='font-medium pb-4'>
              <Link to='/' className='flex items-center'>
                <LogoIcon className='h-4 lg:h-6 w-fit' />
              </Link>
            </DrawerTitle>
            <DrawerDescription className='hidden'>Menu mobile</DrawerDescription>
            {collections.map(({ documentId, name, id }) => (
              <DrawerClose asChild key={id}>
                <Link
                  to={`/collection/${documentId}`}
                  target='_top'
                  className='transition-colors hover:text-foreground/80 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-lg px-4 py-2 rounded'
                >
                  {name}
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
