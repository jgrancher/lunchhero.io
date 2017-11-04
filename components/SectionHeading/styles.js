// Externals
import styled from 'styled-components';

// Variables
import { colors } from '../../styles/variables';

export default styled.p`
  color: ${props => (props.isWhite ? colors.white : colors.grey)};
  font-size: 3rem;
  line-height: 1.5;
  text-align: center;
`;
