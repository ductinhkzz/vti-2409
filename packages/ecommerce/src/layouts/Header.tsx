import MainNav from './MainNav';
import SubNav from './SubNav';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center shadow flex-col items-center'>
      <MainNav />
      <SubNav />
    </header>
  );
};

export default Header;
