// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledHeading from './styles';

const Title = props => (
  <StyledHeading className={props.className} isWhite={props.isWhite}>
    {props.children}
  </StyledHeading>
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
