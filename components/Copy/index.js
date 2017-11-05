// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledCopy from './styles';

const CopySection = ({ children, ...props }) => (
  <StyledCopy {...props}>{children}</StyledCopy>
);

CopySection.propTypes = {
  children: PropTypes.any.isRequired,
  isCentered: PropTypes.bool,
};

CopySection.defaultProps = {
  className: '',
  isCentered: true,
};

export default CopySection;
