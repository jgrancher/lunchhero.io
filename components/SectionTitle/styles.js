// Externals
import styled from 'styled-components';

// Variables
import { colors } from '../../styles/variables';

export default styled.h2`
  color: ${props => (props.isWhite ? colors.white : colors.grey)};
  font-size: 3.8rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
`;
