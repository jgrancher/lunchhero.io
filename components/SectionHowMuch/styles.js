// Externals
import styled from 'styled-components';

// Variables
import { gradients, mediaQuery, spaces } from '../../styles/variables';

export const StyledSection = styled.section`
  padding: ${spaces[3]}px 0;

  ${mediaQuery(2)} {
    padding: 80px 0;
  }

  p {
    line-height: 1.7;
  }
`;

export const StyledBanner = styled.div`
  background-image: ${gradients.orange};
  border-radius: 10px;
  padding: 50px 0 70px;

  ${mediaQuery(2)} {
    padding-bottom: 140px;
  }
`;

export const StyledTitleContainer = styled.div`
  margin-bottom: ${spaces[4]}px;
  text-align: center;

  ${mediaQuery(2)} {
    margin-bottom: ${spaces[5]}px;
  }
`;
