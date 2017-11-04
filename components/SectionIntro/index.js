// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

// Components
import Container from '../Container';
import Logo from '../Logo';

// Styles
import { StyledSection } from './styles';

const SectionIntro = props => (
  <StyledSection hasPadding={props.hasPadding}>
    <Container>
      <Flex>
        <Box width={[1, 1 / 2]}>
          <Logo isBigger />
          <p>
            A Slackbot that helps you raise money for charity by getting lunch
            for your co-workers.<br />
            <em>Feed the world, and your co-workers.</em>
          </p>
          <button>Add to Slack</button>
        </Box>
      </Flex>
    </Container>
  </StyledSection>
);

SectionIntro.propTypes = {
  hasPadding: PropTypes.bool,
};

SectionIntro.defaultProps = {
  hasPadding: false,
};

export default SectionIntro;
