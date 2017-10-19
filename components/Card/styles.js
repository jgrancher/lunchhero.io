// Externals
import styled from 'styled-components';

// Variables
import { colors, spaces } from '../../styles/variables';

export default styled.article`
  background-color: ${props =>
    props.isHighlighted ? colors.blueLightest : colors.white};
  box-shadow: 0 2px 6px 0 ${colors.black};
  padding: ${spaces.md}px;
`;
