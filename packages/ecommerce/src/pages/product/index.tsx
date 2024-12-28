import { api } from '@/lib';
import { IProduct } from '@/redux/types';
import { buildEndpointPopulate } from '@/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Banner, Images } from './components';

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState<IProduct | null>();
  useEffect(() => {
    const controller = new AbortController();
    const callApi = async () => {
      try {
        const homeApi = buildEndpointPopulate(`/products/${id}`, [
          'blocks',
          'blocks.image',
          'blocks.image1',
          'blocks.image2',
          'blocks.video',
          'blocks.video1',
          'blocks.video2',
          'blocks.logo',
          'blocks.primaryCTA',
          'blocks.secondaryCTA',
          'blocks.items',
          'blocks.link',
          'blocks.items.image',
          'blocks.items.link',
          'images',
          'banner',
          'banner.image',
        ]);
        const { data } = await api.get(homeApi, { signal: controller.signal });
        setData(data.data);
      } catch (error) {
        console.error(error);
        setData(null);
      }
    };

    callApi();

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <Banner data={data?.banner} />
      <Images images={data?.images} />
    </>
  );
};

export default Product;
