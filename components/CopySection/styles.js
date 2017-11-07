// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export default styled.p`
  color: ${props => (props.isWhite ? colors.white : colors.grey)};
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${spaces[3]}px;
  padding-right: ${spaces[3]}px;
  text-align: center;

  ${mediaQuery(2)} {
    font-size: 3rem;
    max-width: 62.5%;
    padding-left: 0;
    padding-right: 0;
  }

  strong {
    color: ${colors.black};
  }
`;
