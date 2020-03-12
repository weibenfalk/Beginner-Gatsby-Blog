import React from 'react';
// Styles
import { OverrideGlobalStyle, HamburgerIcon } from './Hamburger.styles';

const Hamburger = ({ isMobile, setMobile }) => (
  <>
  <OverrideGlobalStyle isMobile={isMobile} />
  <HamburgerIcon
    isMobile={isMobile}
    onClick={() => void setMobile(prev => !prev)}
  >
    <div></div>
  </HamburgerIcon>
  </>
);

export default Hamburger;
