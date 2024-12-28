import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  LogoIcon,
} from '@/components';
import { cn } from '@/lib';
import MobileNav, { MobileNavProps } from './MobileNav';

const ORDER_CLASSES: Record<number, string> = {
  0: 'order-0',
  1: 'order-1',
  2: 'order-2',
  3: 'order-3',
  4: 'order-4',
  5: 'order-5',
};

type Props = MobileNavProps;

const MainNav: FC<Props> = ({ collections }) => {
  const navs = collections.filter((c) => c.showHeader);
  const restNavs = collections.filter((c) => !c.showHeader);

  return (
    <div className='w-full h-14 flex justify-center border-y border-t-0'>
      <div className='max-w-5xl flex items-center px-4 w-full justify-between'>
        <div className='hidden md:flex w-full'>
          <nav className='flex items-center md:gap-4 text-sm xl:gap-6 justify-between w-full'>
            <Link to='/' className='flex items-center lg:px-4 order-3'>
              <LogoIcon className='h-4 lg:h-6 w-fit' />
            </Link>
            {navs.map(({ name, id, documentId }, index) => (
              <Link
                key={id}
                to={`/collection/${documentId}`}
                className={cn(
                  'transition-colors hover:text-foreground/80 px-2 text-xs lg:text-sm lg:px-4 py-2',
                  ORDER_CLASSES[index],
                )}
              >
                {name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='link'
                  className='order-6 transition-colors hover:text-foreground/80 px-2 text-xs lg:text-sm lg:px-4 py-2 hover:no-underline'
                >
                  More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-36'>
                {restNavs.map((nav) => (
                  <DropdownMenuItem key={nav.id} asChild>
                    <Link to={`/collection/${nav.documentId}`}>{nav.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <MobileNav collections={collections} />
      </div>
    </div>
  );
};

export default MainNav;
