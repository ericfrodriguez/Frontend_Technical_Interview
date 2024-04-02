import clsx from "clsx";
import { usePathname } from "next/navigation";

import styles from "@/styles/ui/Navbar.module.css";
import Link from 'next/link';
import { pages } from "./pages";

export const Navbar = () => {
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
        pages.map(({ href, label }) => (
          <Link
            key={label}
            className={styles.link}
            href={href}
          >
            {label}
          </Link>
        ))
      }
    </nav>
  )
}