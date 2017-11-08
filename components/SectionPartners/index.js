// Externals
import React from 'react';
import { Box, Flex } from 'grid-styled';

// Components
import Container from '../Container';
import Partner from '../Partner';

// Styles
import { StyledSection, StyledHr } from './styles';

const SectionPartners = props => (
  <StyledSection>
    <Container>
      <StyledHr />
      <Flex wrap>
        <Box width={[1, 1, 1 / 2]}>
          <Partner
            copy="LunchHero has kicked off with World Vision as its launch charity. However, we will be adding new charities soon. If you’re a charity and you’re interested in taking donations through LunchHero, please sign up and we’ll be in touch when users can choose their own charity."
            icon="logo-world-vision"
          />
        </Box>
        <Box width={[1, 1, 1 / 2]}>
          <Partner
            copy="LunchHero is made possible by PayPal’s new split payment system."
            icon="logo-paypal"
            isLast
          />
        </Box>
      </Flex>
    </Container>
  </StyledSection>
);

export default SectionPartners;
