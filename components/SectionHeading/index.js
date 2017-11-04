// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledHeading from './styles';

const SectionHeading = props => (
  <StyledHeading className={props.className} isWhite={props.isWhite}>
    {props.children}
  </StyledHeading>
);

SectionHeading.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  isWhite: PropTypes.bool,
};

SectionHeading.defaultProps = {
  className: '',
  isWhite: false,
};

export default SectionHeading;
