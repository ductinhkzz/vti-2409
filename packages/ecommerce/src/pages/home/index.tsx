import { useEffect, useState } from 'react';

import { IBlock } from '@/types';
import { Blocks } from '@/components';
import { buildEndpointPopulate } from '@/utils';

const Home = () => {
  const [data, setData] = useState<IBlock[]>([]);

  useEffect(() => {
    const homeApi = buildEndpointPopulate(`${import.meta.env.VITE_API_URL}/home`, [
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
    ]);
    fetch(homeApi)
      .then((res) => res.json())
      .then((d) => setData(d.data.blocks));
  }, []);

  return <Blocks blocks={data} />;
};

export default Home;
