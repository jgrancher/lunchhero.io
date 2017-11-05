// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery } from '../../styles/variables';

export default styled.p`
  color: ${colors.grey};
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: ${props => (props.isCentered ? 'center' : 'left')};

  ${mediaQuery(2)} {
    font-size: 1.8rem;
  }
`;
