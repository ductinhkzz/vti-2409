import { Link } from 'react-router-dom';

import { LogoIcon } from '@/components';

const MainNav = () => {
  return (
    <div className='mr-4 hidden md:flex'>
      <nav className='flex items-center gap-4 text-sm xl:gap-6 justify-between'>
        <Link to='/docs' className='transition-colors hover:text-foreground/80 px-4 py-2'>
          Beds
        </Link>
        <Link to='/docs/components' className='transition-colors hover:text-foreground/80 px-4 py-2'>
          Furniture
        </Link>
        <Link to='/blocks' className='transition-colors hover:text-foreground/80 px-4 py-2'>
          Bedding
        </Link>
        <Link to='/' className='flex items-center gap-2'>
          <LogoIcon className='h-4 w-fit' />
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
  );
};

export default MainNav;
