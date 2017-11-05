// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export default styled.div`
  padding: ${spaces[3]}px 0 ${props => (props.isLast ? `${spaces[3]}px` : 0)};

  ${mediaQuery(1)} {
    border-right: ${props =>
      props.isLast ? 0 : `8px solid ${colors.greyLight}`};
    padding: 60px 140px 80px 40px;
  }

  img {
    margin-bottom: ${spaces[2]}px;

    ${mediaQuery(1)} {
      margin-bottom: ${spaces[3]}px;
    }
  }
`;
