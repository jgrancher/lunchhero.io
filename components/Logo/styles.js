// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, times } from '../../styles/variables';

export default styled.a`
  color: ${props => (props.isWhite ? colors.white : colors.black)};
  font-size: ${props =>
    props.isBigger ? 2.4 : props.isSmaller ? 1.6 : 1.8}rem;
  font-weight: 900;
  line-height: 46px;
  transition: opacity ${times.medium}ms ease;

  ${mediaQuery(1)} {
    opacity: ${props => (props.isVisible ? 1 : 0)};
  }

  ${mediaQuery(2)} {
    font-size: ${props => (props.isBigger ? 3.8 : props.isSmaller ? 2 : 3)}rem;
    line-height: 37px;
  }
`;
