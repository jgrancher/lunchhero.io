// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export const StyledSection = styled.section`
  ${mediaQuery(2)} {
    margin-bottom: ${spaces[5]}px;
    padding-top: 120px;
  }
`;

export const StyledList = styled.ul`
  background-color: ${colors.greyLight};
  border-radius: 10px;
  margin-top: ${spaces[3]}px;
  padding: ${spaces[3]}px 0;

  ${mediaQuery(2)} {
    padding: 80px 0 0;
  }

  .step:not(.step--last) {
    margin-bottom: ${spaces[4]}px;

    ${mediaQuery(2)} {
      margin-bottom: 0;
    }
  }
`;

export const StyledExtraStep = styled.div`
  padding-top: ${spaces[3]}px;

  ${mediaQuery(2)} {
    padding-top: ${spaces[5]}px;
  }
`;
