// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export default styled.h4`
  color: ${colors.black};
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.5;
  margin-bottom: ${spaces[1]}px;

  ${mediaQuery(2)} {
    font-size: 2.4rem;
  }
`;
