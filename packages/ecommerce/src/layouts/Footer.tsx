import { Link } from 'react-router-dom';

import { LogoIcon } from '@/components';
import { useRedux } from '@/hooks';

const Footer = () => {
  const { appSelector } = useRedux();
  const { collections } = appSelector((state) => state.global);

  return (
    <footer className='w-full bg-black py-16 flex justify-center'>
      <nav className='max-w-5xl w-full p-8 lg:p-0'>
        <Link to='/' className='flex items-center my-8'>
          <LogoIcon className='h-3 lg:h-5 w-fit text-white' />
        </Link>
        <ul className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {collections.map((collection) => (
            <li key={collection.id}>
              <Link
                to={`/collection/${collection.documentId}`}
                className='text-[#a48661] tracking-widest border-b-[1px] w-full block pb-3 border-neutral-600 text-xs lg:text-base'
              >
                {collection.name}
              </Link>
              <ol className='mt-4'>
                {collection.categories.length === 0 &&
                  collection.products.map((p: any) => (
                    <li key={p.id}>
                      <Link
                        to={`/products/${p.documentId}`}
                        className='text-neutral-400 my-3 text-[0.625rem] uppercase tracking-widest hover:text-white ease-out duration-300'
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                {collection.categories.map((c: any) => (
                  <li key={c.id}>
                    <Link
                      to={`/category/${c.documentId}`}
                      className='text-neutral-400 my-3 text-[0.625rem] uppercase tracking-widest hover:text-white ease-out duration-300'
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
