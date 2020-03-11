import React from 'react';
import { Link } from 'gatsby';
// Styles
import { MobileMenuWrapper, Nav } from './MobileMenu.styles';

const MobileMenu = ({ visible, items }) => (
  <MobileMenuWrapper visible={visible}>
    <Nav>
      {items.map(item => (
        <li key={item.id}>
          <Link to={item.link} activeClassName="active">
            {item.name}
          </Link>
        </li>
      ))}
    </Nav>
  </MobileMenuWrapper>
);

export default MobileMenu;
