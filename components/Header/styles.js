// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces, times } from '../../styles/variables';

export const StyledHeader = styled.header`
  background-color: ${colors.white};
  box-shadow: 0 2px 10px 0 rgba(63, 65, 82, 0.1);
  height: 70px;
  padding: 12px 0;
  position: fixed;
  width: 100%;
  z-index: 10;

  ${mediaQuery(1)} {
    box-shadow: ${props =>
      props.isSticky ? '0 2px 10px 0 rgba(63, 65, 82, 0.1)' : 'none'};
    position: ${props => (props.isSticky ? 'fixed' : 'static')};
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  display: none;

  ${mediaQuery(1)} {
    display: block;
  }

  li {
    display: inline-block;
    font-size: 1.4rem;
    line-height: 46px;
    margin: 0 ${spaces[1]}px;

    ${mediaQuery(2)} {
      font-size: 1.8rem;
    }
  }

  a {
    color: ${colors.grey};
    cursor: pointer;
    transition: color ${times.medium}ms ease;
  }

  a:hover {
    color: ${colors.black};
  }

  a.active {
    color: ${colors.black};
    font-weight: bold;
  }
`;
