// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledLink from './styles';

const Logo = props => {
  return <StyledLink className={props.className} />;
};

Logo.propTypes = {
  className: PropTypes.any,
};

Logo.defaultProps = {
  className: null,
};

export default Logo;
