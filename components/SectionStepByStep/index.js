// Externals
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Container from '../Container';
import CopySection from '../CopySection';
import Step from '../Step';
import StepProgress from '../StepProgress';
import TitleSection from '../TitleSection';

// Styles
import { StyledSection, StyledList, StyledExtraStep } from './styles';

const SectionStepByStep = props => (
  <StyledSection>
    <TitleSection>Click by click</TitleSection>
    <CopySection>
      Sometimes you might be heading out to grab lunch, other times a co-worker
      might be picking it up. Either way, LunchHero makes getting lunch more
      fulfilling than ever. Here’s a click-by-click breakdown of how we make
      lunch the best meal of the day.
    </CopySection>
    <Container>
      <StyledList>
        <li className="step">
          <Step
            copy="the LunchHero bot is listening out for the word ‘lunch’"
            icon="screenshot-1"
            number={1}
            title="Ask your workmates if they want lunch on Slack"
          />
        </li>
        <li>
          <StepProgress />
        </li>
        <li className="step">
          <Step
            copy="what a legend!"
            icon="screenshot-2"
            number={2}
            title="Grab their lunch when you’re picking up yours"
          />
        </li>
        <li>
          <StepProgress />
        </li>
        <li className="step step--last">
          <Step
            copy="so we can raise money for charity"
            icon="screenshot-3"
            number={3}
            title="Ask them to pay using LunchHero"
          />
        </li>
        <li>
          <StepProgress isLast />
        </li>
      </StyledList>
      <StyledExtraStep>
        <Step
          copy="we take no money in this transaction. The lunch money is transferred to you immediately. The $2 is sent to World Vision daily (to avoid excessive transfer fees). "
          icon="illustration-coins"
          isLast
          title="LunchHero adds a $2 delivery fee that goes to World Vision"
        />
      </StyledExtraStep>
    </Container>
  </StyledSection>
);

export default SectionStepByStep;
