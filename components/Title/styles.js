// Externals
import styled from 'styled-components';

// Variables
import { colors } from '../../styles/variables';

export default styled.h1`
  color: ${props => (props.isWhite ? colors.white : colors.black)};
  line-height: 1.5;
`;
