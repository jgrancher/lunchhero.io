// Externals
import styled from 'styled-components';

// Variables
import { gradients, mediaQuery, spaces } from '../../styles/variables';

export const StyledBanner = styled.div`
  background-image: ${gradients.orange};
  border-radius: 10px;
  margin-top: 70px;
  padding: 50px 0 140px;

  ${mediaQuery(2)} {
    margin-top: 280px;
  }
`;

export const StyledTitleContainer = styled.div`
  margin-bottom: ${spaces[5]}px;
  text-align: center;
`;
