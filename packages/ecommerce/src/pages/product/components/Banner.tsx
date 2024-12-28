import { LazyImage, Typography } from '@/components';
import { IProduct } from '@/redux/types';

type Props = {
  data?: IProduct['banner'];
};

const Banner = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  const { image, title, body } = data;
  return (
    <section className='relative before:bg-black before:bg-opacity-25 before:content-[""] before:w-full before:h-full before:absolute'>
      <LazyImage image={image} className='h-full w-full min-h-80 xl:h-[70vh]' />
      <div className='absolute top-0 flex justify-center h-full w-full'>
        <div className='flex justify-end items-start flex-col max-w-xl py-24 px-8 sm:px-4 sm:pe-32'>
          <Typography text={title} className='mb-2 sm:mb-4 lg:mb-6 uppercase' />
          <Typography text={body} type='body' className='mb-2 sm:mb-4 md:leading-5' />
        </div>
      </div>
    </section>
  );
};

export { Banner };
