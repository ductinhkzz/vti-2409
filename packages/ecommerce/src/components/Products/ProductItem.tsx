import { Link } from 'react-router-dom';

import { ICTA, IProduct } from '@/types';
import { LazyImage } from '../LazyImage';
import { Typography } from '../Typography';
import { CTAButton } from '../cta';
import { formattedNumber } from '@/utils';

const ProductItem = ({ name, price, thumbnail, hoverImage }: IProduct) => {
  return (
    <div className='h-full'>
      <Link
        to={'#'}
        target='_blank'
        className='h-full flex items-center justify-center flex-col group hover:bg-gray-100 dark:hover:bg-gray-900'>
        <div className='flex items-center justify-between flex-col h-full w-full'>
          <div className='relative overflow-hidden'>
            <LazyImage
              image={thumbnail}
              containerClass='group-hover:scale-105 ease-in-out duration-500'
              className='aspect-square'
            />
            {hoverImage && (
              <LazyImage
                image={hoverImage}
                containerClass='opacity-0 group-hover:scale-105 ease-in-out duration-500 absolute top-0 group-hover:opacity-100 w-full'
                className='aspect-square object-cover w-full'
              />
            )}
          </div>
          <div className='h-fit flex flex-col items-start justify-between w-full gap-1 px-8 sm:p-2'>
            <div className='my-4 md:mt-0'>
              <Typography text={name} useCurrentColor fixedSize='text-xs tracking-normal mb-2' />
              <Typography type='subTitle' text={`Start at ${formattedNumber(price)}`} useCurrentColor />
            </div>
            <CTAButton
              data={{ target: '_blank', url: '#', title: 'Buy Now' } as ICTA}
              useCurrentColor
              component='span'
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
