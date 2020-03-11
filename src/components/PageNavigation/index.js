import React from 'react';
import { Link } from 'gatsby';
// Icons
import LeftIcon from 'images/arrow-left.svg';
import RightIcon from 'images/arrow-right.svg';
// Styles
import {
  PageNavigationWrapper,
  ImgWrapper,
  Current,
} from './PageNavigation.styles';

const PageNavigation = ({ currentPage, numPages }) => (
  <PageNavigationWrapper>
    <ImgWrapper>
      {currentPage !== 1 && (
        <Link to={`/${currentPage === 2 ? '' : currentPage - 1}`}>
          <input src={LeftIcon} type="image" alt="left-nav"  />
          {/* <img src={LeftIcon} alt="left-nav" role="button" /> */}
        </Link>
      )}
    </ImgWrapper>
    <Current>
      <p>
        {currentPage} / {numPages}
      </p>
    </Current>
    <ImgWrapper>
      {currentPage !== numPages && (
        <Link to={`/${currentPage + 1}`}>
          <input type="image" src={RightIcon} alt="right-nav" />
          {/* <img src={RightIcon} alt="right-nav" role="button" /> */}
        </Link>
      )}
    </ImgWrapper>
  </PageNavigationWrapper>
);

export default PageNavigation;
