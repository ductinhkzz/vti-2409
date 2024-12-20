import { Blocks, ProductList } from '@/components';
import { buildEndpointPopulate } from '@/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Collection = () => {
  const { slug } = useParams();

  const [data, setData] = useState<any>();

  useEffect(() => {
    const homeApi = buildEndpointPopulate(`${import.meta.env.VITE_API_URL}/categories`, [
      'products',
      'topBlocks',
      'bottomBlocks',
      'topBlocks.images',
      'topBlocks.image1',
      'topBlocks.image2',
      'topBlocks.video',
      'topBlocks.video1',
      'topBlocks.video2',
      'topBlocks.logo',
      'topBlocks.primaryCTA',
      'topBlocks.secondaryCTA',
      'topBlocks.items',
      'topBlocks.link',
      'topBlocks.items.image',
      'topBlocks.items.link',
      'bottomBlocks.image1',
      'bottomBlocks.image2',
      'bottomBlocks.video',
      'bottomBlocks.video1',
      'bottomBlocks.video2',
      'bottomBlocks.logo',
      'bottomBlocks.primaryCTA',
      'bottomBlocks.secondaryCTA',
      'bottomBlocks.items',
      'bottomBlocks.link',
      'bottomBlocks.items.image',
      'bottomBlocks.items.link',
      'products',
      'products.thumbnail',
      'products.hoverImage',
    ]);
    fetch(`${homeApi}&filters[slug][$eq]=/${slug}`)
      .then((res) => res.json())
      .then((d) => setData(d.data[0] ?? null));
  }, [slug]);

  console.log('===data=========================');
  console.log(data);
  console.log('============================');

  return (
    <div>
      <Blocks blocks={data?.topBlocks} />
      <section className='flex justify-center my-12 lg:my-24'>
        <div className='max-w-5xl w-full'>
          <ProductList products={data?.products} />
        </div>
      </section>
      <Blocks blocks={data?.bottomBlocks} />
    </div>
  );
};

export default Collection;
