// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

// Components
import Circle from '../Circle';
import Copy from '../Copy';
import Title from '../Title';

// Styles
import StyledStep from './styles';

const Step = props => (
  <StyledStep isLast={props.isLast}>
    <Flex align="center" className="w-100" justify="stretch" wrap>
      <Box width={[1, 1, 1 / 2]} px={[0, 0, 5]}>
        {props.number ? <Circle>{props.number}</Circle> : null}
        <Title>{props.title}</Title>
        {props.copy ? <Copy>{props.copy}</Copy> : null}
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <img alt="" src={`../../static/assets/${props.icon}.png`} />
      </Box>
    </Flex>
  </StyledStep>
);

Step.propTypes = {
  copy: PropTypes.string,
  icon: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
};

Step.defaultProps = {
  copy: null,
  isLast: false,
  number: null,
};

export default Step;
