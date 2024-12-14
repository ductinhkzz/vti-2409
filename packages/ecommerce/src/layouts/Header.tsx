import MainNav from './MainNav';
import SubNav from './SubNav';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-background flex justify-center shadow flex-col items-center'>
      <MainNav />
      <SubNav />
    </header>
  );
};

export default Header;
