// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export const StyledSection = styled.section`
  margin-bottom: ${spaces[3]}px;
  padding-top: 70px;
  text-align: center;

  ${mediaQuery(1)} {
    height: calc(100vh - ${props => (props.hasPadding ? 0 : 70)}px);
    margin-bottom: 0;
    padding-top: ${props => (props.hasPadding ? 70 : 0)}px;
    text-align: left;
  }
`;

export const StyledCopy = styled.p`
  color: ${colors.grey};
  font-size: 2rem;
  line-height: 1.75;
  margin: 15px auto;
  max-width: 450px;

  ${mediaQuery(1)} {
    margin-left: 0;
    margin-right: 0;
  }

  ${mediaQuery(2)} {
    font-size: 3rem;
  }
`;

export const StyledSlogan = styled(StyledCopy)`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 30px;
  margin-top: 0;

  ${mediaQuery(2)} {
    font-size: 1.7rem;
  }
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${spaces[3]}px;

  ${mediaQuery(1)} {
    margin-bottom: 0;
    justify-content: flex-start;
  }
`;
