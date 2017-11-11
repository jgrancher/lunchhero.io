// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

// Components
import Copy from '../Copy';
import Title from '../Title';

// Styles
import StyledImage from './styles';

const HowItWorks = props => (
  <div>
    <StyledImage alt="" src={`/static/assets/icon-${props.icon}.png`} />
    <Title>{props.title}</Title>
    <Copy>{props.copy}</Copy>
  </div>
);

HowItWorks.propTypes = {
  copy: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HowItWorks;
