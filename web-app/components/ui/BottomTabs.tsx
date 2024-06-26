
import Link from 'next/link';
import clsx from 'clsx';

import styles from '@/styles/ui/BottomTabs.module.css'
import { usePathname } from 'next/navigation';
import commonStyles from '@/styles/onboarding/CommonSlide.module.css';
import { pages } from './pages';

export const BottomTabs = () => {
  const pathname = usePathname();

  const hiddenPages: string[] = [
    '/success'
  ];

  return (
    <nav className={clsx(
      styles.container,
      hiddenPages.includes(pathname) && styles.hidden
    )}
    >

      {
        pages.map((page) => {
          const Icon = page.icon;
          const isCurrentPage = pathname === page.href;

          return (
            <Link
              href={page.href}
              key={page.label}
              className={styles.tabItem}
            >
              <Icon className={clsx(styles.tabIcon, isCurrentPage && styles.active)} size={18} />
              <span className={clsx(styles.tabLabel, isCurrentPage && styles.active)}>{page.label}</span>
            </Link>
          )
        })
      }

    </nav>
  )
}