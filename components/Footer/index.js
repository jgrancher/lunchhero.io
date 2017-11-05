// Externals
import React from 'react';

// Components
import Container from '../Container';
import Logo from '../Logo';

// Styles
import { StyledFooter, StyledNav, StyledList } from './styles';

const Footer = props => (
  <StyledFooter>
    <Container>
      <StyledNav>
        <Logo isSmaller isWhite />
        <StyledList isMobileHidden>
          <li>
            <p>© 2017 Lunch Hero</p>
          </li>
        </StyledList>
        <StyledList>
          <li>
            <a href="http://twitter.com/" target="_blank">
              <img alt="" src="../../static/svgs/icon-twitter.svg" />
            </a>
          </li>
          <li>
            <a href="http://facebook.com/" target="_blank">
              <img alt="" src="../../static/svgs/icon-facebook.svg" />
            </a>
          </li>
        </StyledList>
      </StyledNav>
    </Container>
  </StyledFooter>
);

export default Footer;
