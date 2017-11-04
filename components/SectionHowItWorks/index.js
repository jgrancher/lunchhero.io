// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Components
import SectionTitle from '../SectionTitle';
import SectionHeading from '../SectionHeading';

// Styles
import StyledBanner from './styles';

const SectionHowItWorks = props => (
  <section>
    <StyledBanner>
      <SectionTitle isWhite>How it works</SectionTitle>
      <SectionHeading isWhite>
        Let’s say you’re going out to lunch. Maybe you’re getting a Spicy Thai
        Salad. Yum! Your friend Sally wants one too so you get her one. It costs
        $13.
      </SectionHeading>
    </StyledBanner>
  </section>
);

SectionHowItWorks.propTypes = {};

export default SectionHowItWorks;
