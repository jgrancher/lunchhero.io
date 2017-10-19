// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledHeading from './styles';

const Heading = props => (
  <StyledHeading className={props.className} isWhite={props.isWhite}>
    {props.children}
  </StyledHeading>
);

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  isWhite: PropTypes.bool,
};

Heading.defaultProps = {
  className: '',
  isWhite: false,
};

export default Heading;
