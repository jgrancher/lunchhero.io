// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

// Components
import ButtonSlack from '../ButtonSlack';
import Container from '../Container';
import Logo from '../Logo';

// Styles
import { StyledHeader, StyledNav, StyledList } from './styles';

const Header = props => (
  <StyledHeader isSticky={props.isSticky}>
    <Container>
      <StyledNav>
        <Logo isVisible={props.isSticky} />
        <StyledList>
          <li>
            <Link to="how-it-works" spy smooth offset={-70}>
              How it works
            </Link>
          </li>
          <li>
            <Link to="how-much" spy smooth offset={-70}>
              How much could I raise?
            </Link>
          </li>
          <li>
            <Link to="why" spy smooth offset={-70}>
              Why LunchHero
            </Link>
          </li>
          <li>
            <Link to="partners" spy smooth offset={-70}>
              Partners
            </Link>
          </li>
        </StyledList>
        <ButtonSlack isVisible={props.isSticky} />
      </StyledNav>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  isSticky: PropTypes.bool,
};

Header.defaultProps = {
  isSticky: false,
};

export default Header;
