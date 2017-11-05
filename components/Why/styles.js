// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export default styled.div`
  background-color: ${colors.greyLight};
  border-radius: 10px;
  height: 100%;
  padding: ${spaces[3]}px;

  ${mediaQuery(2)} {
    padding: 55px;
  }

  img {
    margin-bottom: ${spaces[2]}px;
    max-height: 85px;
  }
`;
