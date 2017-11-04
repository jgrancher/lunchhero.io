// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledLink from './styles';

const Logo = props => (
  <StyledLink {...props}>
    LunchHero<sup>BETA</sup>
  </StyledLink>
);

Logo.propTypes = {
  isBigger: PropTypes.bool,
  isVisible: PropTypes.bool,
};

Logo.defaultProps = {
  isBigger: false,
  isVisible: true,
};

export default Logo;
