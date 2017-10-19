// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledContainer from './styles';

const Container = props => (
  <StyledContainer className={props.className}>
    {props.children}
  </StyledContainer>
);

Container.propTypes = {
  className: PropTypes.any,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
};

export default Container;
