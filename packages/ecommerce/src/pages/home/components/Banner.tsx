import { CircleChevronRight } from 'lucide-react';

import { BigLogoIcon, Button } from '@/components';
import bannerImg from '@/assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className='relative h-[calc(100vh-3.5rem)] before:bg-black before:bg-opacity-25 before:content-[""] before:w-full before:h-full before:absolute'>
      <img src={bannerImg} alt='Banner Image' className='h-full w-full' />
      <div className='absolute top-0 flex justify-center items-center flex-col w-full h-full'>
        <BigLogoIcon className='h-32' />
        <div className='flex items-center gap-4 mt-8 mb-12'>
          <p className='text-xl text-white tracking-widest'>INNOVATING COMFORT SINCE 1926</p>
          <Button variant='outline' className='bg-transparent text-white'>
            Find your bed
          </Button>
          <Button variant='ghost' className='text-white'>
            Stores near me
            <CircleChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Banner };
