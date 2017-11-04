// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledContainer from './styles';

const Container = ({ children, ...props }) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: null,
};

export default Container;
