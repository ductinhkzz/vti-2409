import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IItem } from '@/types';
import { CTAButton } from '@/components/cta';
import { LazyImage } from '@/components/LazyImage';
import { Typography } from '@/components/Typography';
import { CarouselItem } from '@/components/ui';

type Props = {
  item: IItem;
};

const CardItemBlock: FC<Props> = ({ item }) => {
  return (
    <CarouselItem className='basis-full md:basis-1/2 lg:basis-1/4'>
      <div className='h-full'>
        <div className='h-full'>
          <Link
            to={item.link?.url ?? '#'}
            target={item.link?.target}
            className='h-full flex items-center justify-center flex-col hover:bg-gray-100 dark:hover:bg-gray-900'>
            <div className='flex items-center justify-between flex-col gap-4 h-full w-full'>
              <LazyImage image={item.image} />
              <div className='h-full flex flex-col items-start justify-between w-full gap-1 px-8 sm:p-2'>
                <div>
                  <Typography
                    type='eyeBrow'
                    text={item.eyeBrow}
                    useCurrentColor
                    className='text-[0.5rem] mb-1 tracking-[0.25em]'
                  />
                  <Typography text={item.heading} useCurrentColor fixedSize='text-xs tracking-normal mb-2' />
                  <Typography type='subTitle' text={item.body} useCurrentColor />
                </div>
                <CTAButton data={item.link} useCurrentColor component='span' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </CarouselItem>
  );
};

export { CardItemBlock };
