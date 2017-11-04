// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledContainer from './styles';

const Container = props => <StyledContainer>{props.children}</StyledContainer>;

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
