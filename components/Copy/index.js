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
};

SectionCopy.defaultProps = {
  className: '',
};

export default SectionCopy;
