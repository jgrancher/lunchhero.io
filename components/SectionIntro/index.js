// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

// Components
import ButtonSlack from '../ButtonSlack';
import Container from '../Container';
import Logo from '../Logo';

// Styles
import { StyledSection, StyledCopy, StyledSlogan } from './styles';

const SectionIntro = props => (
  <StyledSection hasPadding={props.hasPadding}>
    <Container className="h-100">
      <Flex
        align={[null, null, 'center']}
        className="h-100"
        justify={[null, null, 'space-between']}
        wrap
      >
        <Box width={[1, 1, 1 / 2]} pr={[0, 0, 3]}>
          <Logo isBigger />
          <StyledCopy>
            A Slackbot that helps you raise money for charity by getting lunch
            for your co-workers.
          </StyledCopy>
          <StyledSlogan>Feed the world, and your co-workers.</StyledSlogan>
          <ButtonSlack isBigger />
        </Box>
        <Box width={[1, 1, 1 / 2]} py={[3, 0]}>
          <img alt="Lunch Hero" src="../../static/assets/lunch-hero.png" />
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
