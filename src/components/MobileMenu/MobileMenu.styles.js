import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  display: block;
  position: fixed;
  left: ${props => (props.visible ? '0px' : '-320px')};
  background: ${props => props.theme.colors.menuBackground};
  width: 320px;
  height: 100%;
  top: 0px;
  padding: 0 0 0 20px;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.ul`
  position: absolute;
  width: 100%;
  top: 100px;
  list-style-type: none;
  padding: 0;
  font-family: 'Muli Regular', Arial, Helvetica, sans-serif;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDark};
  }

  li {
    transition: all 0.5s ease;
    cursor: pointer;
    margin: 10px 0;

    .active {
      font-weight: 800;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;
