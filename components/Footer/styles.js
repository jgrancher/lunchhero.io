// Externals
import styled from 'styled-components';

// Variables
import { colors, gradients, mediaQuery, spaces } from '../../styles/variables';

export const StyledFooter = styled.footer`
  background: ${gradients.pink};
  color: ${colors.white};
  font-size: 1.6rem;
  height: 80px;
  line-height: 46px;
  padding: 17px 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const StyledList = styled.ul`
  li {
    display: inline-block;
    font-size: 1.6rem;
    margin: 0 ${spaces[1]}px;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    display: block;
  }
`;
