// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import StyledButton from './styles';

const ButtonSlack = props => (
  <StyledButton
    href="https://slack.com/oauth/authorize?scope=&client_id="
    {...props}
  >
    <img alt="" src="../../static/svgs/icon-slack.svg" width="20" /> Add to
    Slack
  </StyledButton>
);

ButtonSlack.propTypes = {
  isVisible: PropTypes.bool,
};

ButtonSlack.defaultProps = {
  isVisible: true,
};

export default ButtonSlack;
