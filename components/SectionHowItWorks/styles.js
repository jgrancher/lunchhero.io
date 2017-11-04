// Externals
import styled from 'styled-components';

// Variables
import { gradients, mediaQuery, spaces } from '../../styles/variables';

export const StyledBanner = styled.div`
  background-image: ${gradients.orange};
  border-radius: 10px;
  padding: 100px 16.5% 140px;
`;

export const StyledList = styled.ul`
  margin: 0 auto;
  position: relative;
  text-align: center;
  top: -80px;

  li {
    margin-bottom: ${spaces[3]}px;

    ${mediaQuery(2)} {
      display: inline-block;
      margin-right: 60px;
      max-width: 280px;
      width: 33.33%;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  img {
    margin-bottom: ${spaces[2]}px;

    ${mediaQuery(2)} {
      margin-bottom: ${spaces[3]}px;
    }
  }
`;
