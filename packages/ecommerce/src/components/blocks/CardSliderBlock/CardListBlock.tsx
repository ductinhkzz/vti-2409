import { CardItemBlock } from './CardItemBlock';
import { getThemeClass } from '@/utils';
import { cn } from '@/lib';
import { IBlock } from '@/redux/types';

const GRID_COLS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
};

const CardListBlock = ({ items, theme }: IBlock) => {
  const bg = getThemeClass(theme);
  return (
    <section className={cn('relative w-full flex justify-center', bg)}>
      <div className='max-w-5xl w-full flex flex-col items-center my-12 lg:my-24'>
        <div
          className={cn('grid gap-4', GRID_COLS[items.length], items.length >= 4 && 'sm:grid-cols-2 lg:grid-cols-4')}
        >
          {items.map((item) => (
            <CardItemBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { CardListBlock };
