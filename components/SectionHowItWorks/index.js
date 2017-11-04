// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Container from '../Container';
import Copy from '../Copy';
import SectionCopy from '../SectionCopy';
import SectionTitle from '../SectionTitle';
import Title from '../Title';

// Styles
import { StyledBanner, StyledList } from './styles';

const SectionHowItWorks = props => (
  <section>
    <Container>
      <StyledBanner>
        <SectionTitle isWhite>How it works</SectionTitle>
        <SectionCopy isWhite>
          Let’s say you’re going out to lunch. Maybe you’re getting a Spicy Thai
          Salad. Yum! Your friend Sally wants one too so you get her one. It
          costs $13.
        </SectionCopy>
      </StyledBanner>
      <StyledList>
        <li>
          <img alt="" src="../../static/assets/icon-sally.png" />
          <Title>Sally pays 15$</Title>
          <Copy>
            Sally pays a little extra to have lunch delivered to her desk while
            helping a charity.
          </Copy>
        </li>
        <li>
          <img alt="" src="../../static/assets/icon-you.png" />
          <Title>You get $13</Title>
          <Copy>
            You go for a walk and buy Sally lunch with her $13, exactly what she
            paid you.
          </Copy>
        </li>
        <li>
          <img alt="" src="../../static/assets/icon-coin.png" />
          <Title>World Vision gets $2</Title>
          <Copy>
            You raise $2 for World Vision.<br />You’re happy, Sally’s happy...
            Everyone's happy!
          </Copy>
        </li>
      </StyledList>
    </Container>
  </section>
);

SectionHowItWorks.propTypes = {};

export default SectionHowItWorks;
