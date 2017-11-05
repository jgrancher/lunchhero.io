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
          Let’s say you’re going out to lunch. Maybe you’re getting a Spicy Thai
          Salad. Yum! Your friend Sally wants one too so you get her one. It
          costs $13.
        </CopySection>
      </StyledBanner>
      <StyledBlocksContainer>
        <Flex ml="10%" mr="10%" wrap>
          <Box width={[1, 1, 1 / 3]} pr={[0, 0, 4]} mb={[4, 4, 0]}>
            <HowItWorks
              icon="sally"
              title="Sally pays $15"
              copy="Sally pays a little extra to have lunch delivered to her desk while helping a charity."
            />
          </Box>
          <Box width={[1, 1, 1 / 3]} pr={[0, 0, 4]} mb={[4, 4, 0]}>
            <HowItWorks
              icon="you"
              title="You get $13"
              copy="You go for a walk and buy Sally lunch with her $13, exactly what she paid you."
            />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <HowItWorks
              icon="coin"
              title="World Vision gets $2"
              copy="You raise $2 for World Vision. You’re happy, Sally’s happy... Everyone's happy!"
            />
          </Box>
        </Flex>
      </StyledBlocksContainer>
    </Container>
  </section>
);

export default SectionHowItWorks;
