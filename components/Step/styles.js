// Externals
import styled from 'styled-components';

// Variables
import { mediaQuery, spaces } from '../../styles/variables';

export const StyledStep = styled.div`
  padding: 0 ${spaces[2]}px;
  position: relative;
  text-align: center;
  z-index: 1;

  ${mediaQuery(2)} {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledImage = styled.img`
  margin-top: ${spaces[2]}px;
  max-width: ${props => (props.isLast ? 60 : 100)}%;

  ${mediaQuery(2)} {
    margin-top: 0;
    max-width: 100%;
  }
`;
