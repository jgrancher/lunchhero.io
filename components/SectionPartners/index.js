// Externals
import React from 'react';
import { Box, Flex } from 'grid-styled';

// Components
import Container from '../Container';
import Partner from '../Partner';

// Styles
import StyledHr from './styles';

const SectionPartners = props => (
  <section>
    <Container>
      <StyledHr />
      <Flex wrap>
        <Box width={[1, 1, 1 / 2]}>
          <Partner
            copy="LunchHero has launched with World Vision but will soon be taking on new charities. If you are interested in taking donations from LunchHero please sign up and we’ll be sure to get in touch when LunchHero can choose their own charity."
            icon="logo-world-vision"
          />
        </Box>
        <Box width={[1, 1, 1 / 2]}>
          <Partner
            copy="Lunch Hero is made possible by PayPal and their new split payment system. Use placeholder copy if needed. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon="logo-paypal"
            isLast
          />
        </Box>
      </Flex>
    </Container>
  </section>
);

export default SectionPartners;
