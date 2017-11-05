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
import { StyledSection, StyledList } from './styles';

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
            number={1}
            title={['Ask your team mates if they', 'want lunch on Slack']}
            copy="(our bot listens out for the word 'lunch')"
          />
        </li>
        <li>
          <StepProgress />
        </li>
        <li className="step">
          <Step
            number={2}
            title={['Get them lunch when you’re', 'getting yours']}
          />
        </li>
        <li>
          <StepProgress />
        </li>
        <li className="step">
          <Step
            number={3}
            title={['Request payment through', 'the LunchHero bot']}
          />
        </li>
      </StyledList>
    </Container>
  </StyledSection>
);

export default SectionStepByStep;
