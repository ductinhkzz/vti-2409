import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  LazyImage,
} from '@/components';
import { IMedia } from '@/redux/types';
type Props = {
  images?: IMedia[] | null;
};

const Images = ({ images }: Props) => {
  return (
    <Carousel className='w-full my-8'>
      <CarouselContent>
        {(images ?? []).map((image) => (
          <CarouselItem key={image.id} className='basis-auto'>
            <Card>
              <CardContent className='p-0'>
                <LazyImage image={image} className='h-full max-h-[36rem]' />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-4' />
      <CarouselNext className='right-4' />
    </Carousel>
  );
};

export { Images };
