// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledTitle from './styles';

const Title = props => (
  <StyledTitle isWhite={props.isWhite}>{props.children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  isWhite: PropTypes.bool,
};

Title.defaultProps = {
  className: '',
  isWhite: false,
};

export default Title;
