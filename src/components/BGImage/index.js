import React from 'react';
// Styles
import { BGWrapper, FakeBGImg, Content } from './BGImage.styles';

// This component is inspired from here:
// https://markoskon.com/gatsby-background-image-example/

const BGImg = ({ fluid, title, className, children }) => {
  return (
    <BGWrapper>
      <FakeBGImg fluid={fluid} title={title} />
      <Content className={className}>{children}</Content>
    </BGWrapper>
  );
};

export default BGImg;
