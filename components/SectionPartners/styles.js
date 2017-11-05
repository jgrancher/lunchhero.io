// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export const StyledSection = styled.section`
  ${mediaQuery(2)} {
    padding-top: ${spaces[3]}px;
  }
`;

export const StyledHr = styled.hr`
  background-color: ${colors.greyLight};
  border: 0;
  height: 8px;
  margin: 0;
`;
