// Externals
import React from 'react';
import { Box, Flex } from 'grid-styled';

// Components
import Container from '../Container';
import SectionCopy from '../SectionCopy';
import Select from '../Select';
import Title from '../Title';

// Variables
const peoples = [
  { value: 2, name: '2 people' },
  { value: 3, name: '3 people' },
  { value: 4, name: '4 people' },
  { value: 5, name: '5 people' },
  { value: 6, name: '6 people' },
  { value: 7, name: '7 people' },
  { value: 8, name: '8 people' },
];

const times = [
  { value: 1, name: '1 time' },
  { value: 2, name: '2 times' },
  { value: 3, name: '3 times' },
  { value: 4, name: '4 times' },
  { value: 5, name: '5 times' },
];

// Styles
import { StyledBanner, StyledTitleContainer } from './styles';

class SectionHowMuch extends React.Component {
  state = {
    people: peoples[0].value,
    times: times[2].value,
  };

  onPeopleChange = people => {
    this.setState({ people });
  };

  onTimesChange = times => {
    this.setState({ times });
  };

  render() {
    const perWeek = 2 * this.state.people * this.state.times;
    const perYear = 4 * 12 * perWeek;

    return (
      <section>
        <Container>
          <StyledBanner>
            <StyledTitleContainer>
              <Title isWhite>How much could I raise?</Title>
            </StyledTitleContainer>
            <SectionCopy isWhite>
              If I get{' '}
              <Select
                defaultValue={this.state.people}
                name="people"
                onChange={this.onPeopleChange}
                options={peoples}
              />{' '}
              lunch{' '}
              <Select
                defaultValue={this.state.times}
                name="times"
                onChange={this.onTimesChange}
                options={times}
              />
              <br />
              a week, I'll raise <strong>${perWeek} a week</strong>,
              <br />
              or <strong>${perYear} a year</strong>
            </SectionCopy>
          </StyledBanner>
        </Container>
      </section>
    );
  }
}

export default SectionHowMuch;
