// Externals
import styled from 'styled-components';

// Variables
import { mediaQuery, spaces } from '../../styles/variables';

export default styled.div`
  padding: 0 ${spaces[2]}px;
  position: relative;
  text-align: center;
  z-index: 1;

  ${mediaQuery(2)} {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  img {
    margin-top: ${props => (props.isLast ? spaces[3] : spaces[2])}px;

    ${mediaQuery(2)} {
      margin-top: 0;
    }
  }
`;
