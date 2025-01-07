import { Button, Typography } from '@/components';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex justify-center m-36'>
      <div className='max-w-2xl'>
        <Typography text='404' useCurrentColor fixedSize='font-bold text-5xl' />
        <Typography
          text={`Looks like you've ventured into the unknown digital realm.`}
          type='body'
          useCurrentColor
          className='my-4 md:text-xl'
        />
        <Button asChild>
          <Link to='/'>Back to home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
