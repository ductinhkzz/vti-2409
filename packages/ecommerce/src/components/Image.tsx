import { IMedia } from '@/redux/types';
import { getMediaUrl } from '@/utils';

type Props = {
  image: IMedia | null;
  className?: string;
};

const Image = ({ image, className }: Props) => {
  if (!image) {
    return null;
  }
  return <img src={getMediaUrl(image.url)} alt='' className={className} />;
};

export { Image };
