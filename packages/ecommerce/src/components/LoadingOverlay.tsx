import { LoaderCircle } from 'lucide-react';

const LoadingOverlay = () => {
  return (
    <div className='fixed inset-0 z-50 bg-black/80 flex justify-center items-center'>
      <LoaderCircle className='animate-spin text-gray-400 w-8 h-8' />
    </div>
  );
};

export { LoadingOverlay };
