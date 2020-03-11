import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';
// Components
import Menu from 'components/Menu';
import MobileMenu from 'components/MobileMenu';
import Hamburger from 'components/Hamburger';
import ModeButton from 'components/ModeButton';
// Query Hooks
import { useSiteConfigQuery } from 'hooks/useSiteConfigQuery';
// Site context
import { ModeContext } from 'context/ModeProvider';
// Styles
import { HeaderWrapper, Logo } from './Header.styles';

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery();
  const [darkMode, setDarkMode] = useContext(ModeContext);
  const [mobile, setMobile] = useState(false);

  return (
    <HeaderWrapper>
      <Hamburger isMobile={mobile} setMobile={setMobile} />
      <MobileMenu visible={mobile} items={siteConfig.menu} />
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </HeaderWrapper>
  );
};

export default Header;
