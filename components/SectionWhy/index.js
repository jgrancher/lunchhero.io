// Externals
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'grid-styled';

// Components
import Container from '../Container';
import CopySection from '../CopySection';
import TitleSection from '../TitleSection';
import Why from '../Why';

// Styles
import { StyledSection, StyledBlocksContainer } from './styles';

const SectionWhy = props => (
  <StyledSection>
    <TitleSection>Why LunchHero?</TitleSection>
    <CopySection>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </CopySection>
    <Container>
      <StyledBlocksContainer>
        <Flex align="stretch" ml={[0, 0, '5%']} mr={[0, 0, '5%']} wrap>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]} mb={[2, 2, 0]}>
            <Why
              copy="Compete against your workmates"
              icon="icon-why-1"
              title="Be a gaddam lunch hero!"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]} mb={[2, 2, 0]}>
            <Why
              copy="This is a super simple way of making a difference"
              icon="icon-why-2"
              title="Because you’re just a good person"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]}>
            <Why
              copy="But... you’re not going to run another marathon"
              icon="icon-why-3"
              title="Because you’d like to do something..."
            />
          </Box>
        </Flex>
      </StyledBlocksContainer>
    </Container>
  </StyledSection>
);

export default SectionWhy;
