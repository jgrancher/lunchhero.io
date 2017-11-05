// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery } from '../../styles/variables';

export default styled.p`
  color: ${props => (props.isWhite ? colors.white : colors.grey)};
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.7;
  margin-left: auto;
  margin-right: auto;
  max-width: 66.66%;
  text-align: center;

  ${mediaQuery(2)} {
    font-size: 3rem;
  }

  strong {
    color: ${colors.black};
  }
`;
