// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Container from '../Container';
import SectionCopy from '../SectionCopy';
import SectionTitle from '../SectionTitle';
import Step from '../Step';
import StepProgress from '../StepProgress';

// Styles
import { StyledSection, StyledList, StyledExtraStep } from './styles';

const SectionStepByStep = props => (
  <StyledSection>
    <SectionTitle>Step by step</SectionTitle>
    <SectionCopy>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </SectionCopy>
    <Container>
      <StyledList>
        <li className="step">
          <Step
            copy="(our bot listens out for the word 'lunch')"
            icon="screenshot-1"
            number={1}
            title="Ask your team mates if they want lunch on Slack"
          />
        </li>
        <li>
          <StepProgress />
        </li>
        <li className="step">
          <Step
            icon="screenshot-2"
            number={2}
            title="Get them lunch when you’re getting yours"
          />
        </li>
        <li>
          <StepProgress />
        </li>
        <li className="step step--last">
          <Step
            icon="screenshot-3"
            number={3}
            title="Request payment through the LunchHero bot"
          />
        </li>
        <li>
          <StepProgress isLast />
        </li>
      </StyledList>
      <StyledExtraStep>
        <Step
          copy="We take no money in the transaction. The full amount goes to charity and is transferred immediately to you, and daily to World Vision (to avoid excessive transaction fees)."
          icon="illustration-coins"
          isLast
          title="LunchHero bot will top up the payment with a small delivery charge that goes directly to World Vision."
        />
      </StyledExtraStep>
    </Container>
  </StyledSection>
);

export default SectionStepByStep;
