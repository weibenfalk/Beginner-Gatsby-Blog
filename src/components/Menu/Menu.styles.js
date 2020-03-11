import styled from 'styled-components';

export const Nav = styled.ul`
  display: none;
  list-style-type: none;
  padding: 0;
  font-family: 'Muli Regular', Arial, Helvetica, sans-serif;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDark};
  }

  li {
    margin-right: 20px;
    transition: all 0.5s ease;
    cursor: pointer;

    .active {
      font-weight: 800;
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;
