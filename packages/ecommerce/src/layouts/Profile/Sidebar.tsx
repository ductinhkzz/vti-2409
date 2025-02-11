import { Link, useLocation } from 'react-router-dom';

import { buttonVariants } from '@/components';
import { cn } from '@/lib/utils';

const navItems = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    href: '/shipping-address',
    title: 'Shipping address',
  },
  {
    href: '/cart',
    title: 'Cart',
  },
  {
    href: '/order',
    title: 'Order',
  },
];

export const Sidebar = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={cn('flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1', className)} {...props}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline',
            'justify-start',
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
