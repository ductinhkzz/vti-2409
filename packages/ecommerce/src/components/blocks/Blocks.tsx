import { IBlock } from '@/redux/types';
import { StartPageHeroBlock } from './StartPageHeroBlock';
import { HeroBlock } from './HeroBlock';
import { HeaderDividerBlock } from './HeaderDividerBlock';
import { CardListBlock, CardSliderBlock } from './CardSliderBlock';
import { HeroCardListBlock } from './HeroCardListBlock';
import { TextBlock } from './TextBlock';
import { ImageSliderBlock } from './ImageSliderBlock';

type Props = {
  blocks?: IBlock[];
};

const Blocks = ({ blocks = [] }: Props) => {
  return blocks.map((block) => {
    switch (block.type) {
      case 'StartPageHeroBlock':
        return <StartPageHeroBlock key={block.id} {...block} />;
      case 'HeroBlock':
        return <HeroBlock key={block.id} {...block} />;
      case 'HeaderDividerBlock':
        return <HeaderDividerBlock key={block.id} {...block} />;
      case 'CardSliderBlock':
        return <CardSliderBlock key={block.id} {...block} />;
      case 'HeroCardListBlock':
        return <HeroCardListBlock key={block.id} {...block} />;
      case 'CardListBlock':
        return <CardListBlock key={block.id} {...block} />;
      case 'TextBlock':
        return <TextBlock key={block.id} {...block} />;
      case 'ImageSliderBlock':
        return <ImageSliderBlock key={block.id} {...block} />;
      default:
        break;
    }
  });
};

export { Blocks };
