// Externals
import styled from 'styled-components';

// Variables
import { colors, times } from '../../styles/variables';

export default styled.a`
  color: ${colors.black};
  font-size: ${props => (props.isBigger ? 3.8 : 3)}rem;
  font-weight: 900;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity ${times.medium}ms ease;

  sup {
    font-size: 1.2rem;
    font-weight: 800;
  }
`;
