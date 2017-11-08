// Externals
import React from 'react';
import { Box, Flex } from 'grid-styled';

// Components
import Container from '../Container';
import CopySection from '../CopySection';
import HowItWorks from '../HowItWorks';
import TitleSection from '../TitleSection';

// Styles
import { StyledBanner, StyledBlocksContainer } from './styles';

const SectionHowItWorks = props => (
  <section>
    <Container>
      <StyledBanner>
        <TitleSection isWhite>How it works</TitleSection>
        <CopySection isWhite>
          Let’s say you’re heading out to pick up lunch. Maybe you’re getting a
          spicy Thai salad. Yum! Your friend and co-worker Sally wants one too,
          so you offer to get her one while you’re there. It costs $13.
        </CopySection>
      </StyledBanner>
      <StyledBlocksContainer>
        <Flex align="stretch" ml={[0, 0, '5%']} mr={[0, 0, '5%']} wrap>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]} mb={[4, 4, 0]}>
            <HowItWorks
              icon="sally"
              title="Sally pays $15"
              copy="Sally pays a little extra to have lunch delivered to her desk, while helping charity."
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]} mb={[4, 4, 0]}>
            <HowItWorks
              icon="you"
              title="You get $13"
              copy="You take a walk and buy Sally lunch with her $13 – the exact cost of the salad."
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} px={[0, 0, 2]}>
            <HowItWorks
              icon="coin"
              title="World Vision gets $2"
              copy="You raise $2 to help those in need. You’re happy. Sally’s happy. Everyone’s happy!"
            />
          </Box>
        </Flex>
      </StyledBlocksContainer>
    </Container>
  </section>
);

export default SectionHowItWorks;
