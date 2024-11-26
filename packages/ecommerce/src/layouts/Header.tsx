import MainNav from './MainNav';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border flex justify-center'>
      <div className='container flex h-14 items-center px-4 w-full justify-center'>
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
