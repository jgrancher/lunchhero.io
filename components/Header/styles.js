// Externals
import styled from 'styled-components';

// Variables
import { colors, spaces, times } from '../../styles/variables';

export const StyledHeader = styled.header`
  background-color: ${colors.white};
  box-shadow: ${props =>
    props.isSticky ? '0 2px 10px 0 rgba(63, 65, 82, 0.1)' : 'none'};
  height: 70px;
  padding: 12px 0;
  position: ${props => (props.isSticky ? 'fixed' : 'static')};
  width: 100%;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  li {
    display: inline-block;
    font-size: 1.8rem;
    line-height: 46px;
    margin: 0 ${spaces.sm}px;
  }

  a {
    color: ${colors.grey};
    cursor: pointer;
    transition: color ${times.medium}ms ease;
  }

  a.active {
    color: ${colors.black};
    font-weight: bold;
  }
`;
