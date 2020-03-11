import styled from 'styled-components';

export const HamburgerIcon = styled.div`
  position: fixed;
  display: block;
  width: 30px;
  z-index: 1000;
  cursor: pointer;

  :after,
  :before,
  div {
    background-color: ${props => props.theme.colors.textDark};
    border-radius: 2px;
    content: '';
    display: block;
    height: 4px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }

  :before {
    transform: ${props =>
      props.isMobile ? 'translateY(9px) rotate(45deg)' : ''};
  }

  :after {
    transform: ${props =>
      props.isMobile ? 'translateY(-9px) rotate(-45deg)' : ''};
  }

  div {
    transform: ${props => (props.isMobile ? 'scale(0)' : '')};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
