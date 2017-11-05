// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export default styled.h2`
  color: ${props => (props.isWhite ? colors.white : colors.black)};
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: ${spaces[2]}px;
  text-align: center;

  ${mediaQuery(2)} {
    font-size: 3.8rem;
  }
`;
