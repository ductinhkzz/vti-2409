import { Link } from 'react-router-dom';

import { LogoIcon } from '@/components';

const MainNav = () => {
  return (
    <div className='w-full h-14 flex justify-center border-y border-t-0'>
      <div className='max-w-5xl flex items-center px-4 w-full justify-between'>
        <div className='hidden md:flex w-full'>
          <nav className='flex items-center gap-4 text-sm xl:gap-6 justify-between w-full'>
            <Link to='/docs' className='transition-colors hover:text-foreground/80 px-4 py-2'>
              Beds
            </Link>
            <Link to='/docs/components' className='transition-colors hover:text-foreground/80 px-4 py-2'>
              Furniture
            </Link>
            <Link to='/blocks' className='transition-colors hover:text-foreground/80 px-4 py-2'>
              Bedding
            </Link>
            <Link to='/' className='flex items-center gap-2 px-4'>
              <LogoIcon className='h-6 w-fit' />
            </Link>
            <Link to='/charts' className='transition-colors hover:text-foreground/80 px-4 py-2'>
              Why dux
            </Link>
            <Link to='/themes' className='transition-colors hover:text-foreground/80 px-4 py-2'>
              Try at hotel
            </Link>
            <Link to='/colors' className='transition-colors hover:text-foreground/80 px-4 py-2'>
              More
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
