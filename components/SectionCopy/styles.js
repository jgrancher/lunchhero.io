// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery } from '../../styles/variables';

export default styled.p`
  color: ${props => (props.isWhite ? colors.white : colors.grey)};
  font-size: 2rem;
  line-height: 1.75;
  text-align: center;

  ${mediaQuery(2)} {
    font-size: 3rem;
  }
`;
