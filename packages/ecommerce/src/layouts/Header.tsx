import { useRedux } from '@/hooks';
import MainNav from './MainNav';
import { SubNav } from './SubNav';

const Header = () => {
  const { appSelector } = useRedux();
  const { collections } = appSelector((state) => state.global);
  return (
    <header className='sticky top-0 z-50 w-full bg-background flex justify-center shadow flex-col items-center'>
      <MainNav collections={collections} />
      <SubNav />
    </header>
  );
};

export default Header;
