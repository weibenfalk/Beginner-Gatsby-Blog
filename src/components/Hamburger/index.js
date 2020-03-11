import React from 'react';
// Styles
import { HamburgerIcon } from './Hamburger.styles';

const Hamburger = ({ isMobile, setMobile }) => (
  <HamburgerIcon
    isMobile={isMobile}
    onClick={() => void setMobile(prev => !prev)}
  >
    <div></div>
  </HamburgerIcon>
);

export default Hamburger;
