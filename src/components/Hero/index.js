import React from 'react';
import { Link } from 'gatsby';
// Components
import BGImg from 'components/BGImage';
// Query Hooks
import { useHeroQuery } from 'hooks/useHeroQuery';
// Styles
import { HeroWrapper, TextWrapper } from './Hero.styles';

const Hero = () => {
  const {
    heroImage,
    heroImageText,
    heroImageBtnText,
    heroImageBtnLink,
  } = useHeroQuery();

  return (
    <HeroWrapper>
      <BGImg title="heroImage" fluid={heroImage.childImageSharp.fluid}>
        <TextWrapper>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImg>
    </HeroWrapper>
  );
};

export default Hero;
