// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Components

// Styles
import StyledArticle from './styles';

const Card = props => (
  <StyledArticle>
    <p>Card</p>
  </StyledArticle>
);

Card.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Card.defaultProps = {
  description: '',
};

export default Card;
