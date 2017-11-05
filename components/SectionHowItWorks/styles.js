// Externals
import styled from 'styled-components';

// Variables
import { gradients, mediaQuery } from '../../styles/variables';

export const StyledBanner = styled.div`
  background-image: ${gradients.orange};
  border-radius: 10px;
  padding: 50px 0 140px;

  ${mediaQuery(2)} {
    padding-top: 100px;
  }
`;

export const StyledBlocksContainer = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  top: -80px;
`;
