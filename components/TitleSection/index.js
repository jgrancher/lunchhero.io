// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledHeading from './styles';

const TitleSection = ({ children, ...props }) => (
  <StyledHeading {...props}>{children}</StyledHeading>
);

TitleSection.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  isWhite: PropTypes.bool,
};

TitleSection.defaultProps = {
  className: '',
  isWhite: false,
};

export default TitleSection;
