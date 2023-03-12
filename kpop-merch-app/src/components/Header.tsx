import { type } from "os";
import React from "react";
import HeaderNavLink, { NavLink } from './HeaderNavLink';

import './Header.css';

export type HeaderProps = {
    title: string
    links : NavLink[]
}

export const Header: React.FC<HeaderProps> = React.memo(
    ({ title, links }) => {
      return (
        <header className="app-header">
          <section className="app-title">
            <h1>{title}</h1>
          </section>
          <span className="fill-space" />
          <section className="app-links">
            {links &&
              links.map((link: NavLink) => (
                <HeaderNavLink
                  label={link.label}
                  route={link.route}
                  key={link.label}
                />
              ))}
          </section>
        </header>
      );
    }
  );
  
  export default Header;