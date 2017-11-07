// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export const StyledSection = styled.section`
  padding: ${spaces[4]}px 0;

  ${mediaQuery(1)} {
    padding: ${spaces[5]}px 0;
  }
`;

export const StyledBlocksContainer = styled.div`
  padding-top: ${spaces[3]}px;
  text-align: center;

  ${mediaQuery(2)} {
    padding-top: 70px;
  }
`;
