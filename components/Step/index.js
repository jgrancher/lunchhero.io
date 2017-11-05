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
  <StyledStep>
    <Flex align="center" className="w-100" justify="stretch" wrap>
      <Box width={[1, 1, 1 / 2]} pr={[0, 0, 5]}>
        <Circle>{props.number}</Circle>
        <Title>
          {props.title[0]}
          <br />
          {props.title[1]}
        </Title>
        {props.copy ? <Copy>{props.copy}</Copy> : null}
      </Box>
      <Box width={[1, 1, 1 / 2]}>
        <img
          alt="Step by step"
          src={`../../static/assets/step-${props.number}.png`}
        />
      </Box>
    </Flex>
  </StyledStep>
);

Step.propTypes = {
  copy: PropTypes.string,
  number: PropTypes.number.isRequired,
  title: PropTypes.array.isRequired,
};

Step.defaultProps = {
  copy: null,
};

export default Step;
