// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export const StyledSection = styled.section`
  padding-top: 70px;

  ${mediaQuery(1)} {
    height: calc(100vh - ${props => (props.hasPadding ? 0 : 70)}px);
    padding-top: ${props => (props.hasPadding ? 70 : 0)}px;
  }
`;

export const StyledCopy = styled.p`
  color: ${colors.grey};
  font-size: 2rem;
  line-height: 1.75;
  margin: 15px 0;
  max-width: 450px;

  ${mediaQuery(2)} {
    font-size: 3rem;
  }
`;

export const StyledSlogan = styled(StyledCopy)`
  font-size: 1.2rem;
  font-style: italic;
  margin: 0 0 30px;

  ${mediaQuery(2)} {
    font-size: 1.7rem;
  }
`;
