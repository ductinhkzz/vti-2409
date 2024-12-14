import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { IMedia } from '@/types';
import { getMediaUrl } from '@/utils';
import { cn } from '@/lib';
import { Skeleton } from './ui';

type Props = {
  image: IMedia | null;
  className?: string;
  containerClass?: string;
  useView?: boolean;
};

const LazyImage = ({ image, className, containerClass, useView }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Load the image only once
    threshold: 0.1, // Load when 10% of the image is visible
  });
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const onLoad = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current;
      setSize({ width, height });
      setLoaded(true);
    }
  };

  if (!image) {
    return null;
  }

  return (
    <div ref={ref} className={containerClass}>
      {useView && !inView && <Skeleton style={{ ...size }} />}
      {(!useView || inView) && (
        <picture>
          <source srcSet={getMediaUrl(image.url)} data-srcset={getMediaUrl(image.url)} media='(min-width:1536px)' />
          {image.formats.large && (
            <source
              srcSet={getMediaUrl(image.formats.large.url)}
              data-srcset={getMediaUrl(image.formats.large.url)}
              media='(min-width:1024px)'
            />
          )}
          <source
            srcSet={getMediaUrl(image.formats.medium.url)}
            data-srcset={getMediaUrl(image.formats.medium.url)}
            media='(min-width:640px)'
          />
          <img
            src={getMediaUrl(image.formats.small.url)}
            ref={imgRef}
            alt=''
            onLoad={onLoad}
            onError={() => setLoaded(false)}
            className={cn(
              className,
              'transition-opacity duration-300 ease-in-out',
              loaded ? 'opacity-100' : 'opacity-0',
            )}
          />
        </picture>
      )}
    </div>
  );
};

export { LazyImage };
