import React from 'react';
// SVG Images
import dayIcon from 'images/daymode.svg';
import nightIcon from 'images/nightmode.svg';
// Styles
import { ImgButton } from './ModeButton.styles';

const ModeButton = ({ darkMode, setDarkMode }) => (
  <ImgButton
    src={darkMode ? nightIcon : dayIcon}
    alt="mode"
    onClick={() => setDarkMode && setDarkMode(prev => !prev)}
  />
);

export default ModeButton;
