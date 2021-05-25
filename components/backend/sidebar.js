import {
  PencilAltIcon,
  UsersIcon,
  FlagIcon,
  HomeIcon,
  CogIcon,
  DocumentAddIcon,
} from '@heroicons/react/outline';

import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  

function Sidebar() {
  const sidebarNavigation = [
    { name: 'Home', href: '/admin/dashboard', icon: HomeIcon, current: true },
    { name: 'Posts', href: '/admin/dashboard/posts', icon: PencilAltIcon, current: false },
    { name: 'Pages', href: '/admin/dashboard/pages', icon: DocumentAddIcon, current: false },
    { name: 'Leads', href: '/admin/dashboard/leads', icon: FlagIcon, current: false },
    { name: 'Users', href: '/admin/dashboard/users', icon: UsersIcon, current: false },
    { name: 'Settings', href: '/admin/dashboard/settings', icon: CogIcon, current: false },
  ];

  return (
    <nav
      aria-label='Sidebar'
      className='hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto'
    >
      <div className='relative w-20 flex flex-col p-3 space-y-3'>
        {sidebarNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
          >
            <a className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-400 hover:bg-gray-700',
              'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
            )} >
            <span className='sr-only'>{item.name}</span>
            <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
