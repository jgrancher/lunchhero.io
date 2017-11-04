// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledCopy from './styles';

const SectionCopy = ({ children, ...props }) => (
  <StyledCopy {...props}>{children}</StyledCopy>
);

SectionCopy.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  isWhite: PropTypes.bool,
};

SectionCopy.defaultProps = {
  className: '',
  isWhite: false,
};

export default SectionCopy;
