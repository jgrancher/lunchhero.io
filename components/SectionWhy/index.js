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
      Grabbing lunch for your workmates is a pretty nice thing to do right? And
      helping out those less fortunate is downright noble. As far as we can
      tell, that makes LunchHero a win-win. Oh, and you can also compete for
      glory!
    </CopySection>
    <Container>
      <StyledBlocksContainer>
        <Flex align="stretch" ml={[0, 0, '5%']} mr={[0, 0, '5%']} wrap>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]} mb={[2, 2, 0]}>
            <Why
              copy="Compete against your workmates for bragging rights."
              icon="icon-why-1"
              title="For glory"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]} mb={[2, 2, 0]}>
            <Why
              copy="Get your fill at lunchtime by helping co-workers and the less fortunate."
              icon="icon-why-2"
              title="Feel good"
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]}>
            <Why
              copy="It’s a super-simple way of making a real difference."
              icon="icon-why-3"
              title="Give back"
            />
          </Box>
        </Flex>
      </StyledBlocksContainer>
    </Container>
  </StyledSection>
);

export default SectionWhy;
