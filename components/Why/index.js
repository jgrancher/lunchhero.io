// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Copy from '../Copy';
import Title from '../Title';

// Styles
import StyledWhy from './styles';

const Why = props => (
  <StyledWhy>
    <img alt="" src={`/static/assets/${props.icon}.png`} />
    <Title>{props.title}</Title>
    <Copy>{props.copy}</Copy>
  </StyledWhy>
);

Why.propTypes = {
  copy: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Why;
