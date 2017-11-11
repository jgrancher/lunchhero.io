// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

// Components
import Circle from '../Circle';

// Styles
import StyledImageContainer from './styles';

const StepProgress = props => (
  <div>
    <Flex align="center" className="w-100" justify="stretch" wrap>
      <Box width={[1, 1, 1 / 2]} pr={[0, 0, 5]} />
      <Box width={[1, 1, 1 / 2]}>
        <StyledImageContainer isLast={props.isLast}>
          <Circle isShifted={props.isLast}>
            <img alt="" src={`/static/svgs/icon-arrow.svg`} />
          </Circle>
        </StyledImageContainer>
      </Box>
    </Flex>
  </div>
);

StepProgress.propTypes = {
  isLast: PropTypes.bool,
};

StepProgress.defaultProps = {
  isLast: false,
};

export default StepProgress;
