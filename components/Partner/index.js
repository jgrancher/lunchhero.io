// Externals=
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Copy from '../Copy';

// Styles
import StyledPartner from './styles';

const Partner = props => (
  <StyledPartner isLast={props.isLast}>
    <img alt="Partner" src={`../../static/assets/${props.icon}.png`} />
    <Copy isCentered={false}>{props.copy}</Copy>
  </StyledPartner>
);

Partner.propTypes = {
  copy: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
};

Partner.defaultProps = {
  isLast: false,
};

export default Partner;
