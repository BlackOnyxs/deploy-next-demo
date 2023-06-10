
import styles from './NavBar.module.css';
import { ActiveLink } from './ActiveLink';
import { FC } from 'react';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar:FC = () => {
  return (
    <nav className={ styles['menu-container']}>
      {
        menuItems.map( ({text, href}) => (
          <ActiveLink key={href} text={ text } href={href} />
        ))
      }
      </nav>
  )
}
