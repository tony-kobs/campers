'use client';

import css from './Header.module.css';
import Container from '../Container/Container';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerInner}>
          <Link href="/" className={css.headerLogo}>
            <svg width="136" height="16" role="img" aria-label="TravelTrucks">
              <use href="/sprite.svg#logo" />
            </svg>
          </Link>
          <nav className={css.headerNav}>
            <ul className={css.headerNavList}>
              <li>
                <Link
                  href="/"
                  className={`${css.headerNavLink} ${pathname === '/' ? css.active : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className={`${css.headerNavLink} ${pathname === '/catalog' ? css.active : ''}`}
                >
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
