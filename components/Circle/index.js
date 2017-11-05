// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledCircle from './styles';

const Circle = ({ children, ...props }) => (
  <StyledCircle>{children}</StyledCircle>
);

Circle.propTypes = {
  children: PropTypes.any,
};

export default Circle;
