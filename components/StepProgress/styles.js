// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, spaces } from '../../styles/variables';

export default styled.div`
  display: none;
  padding-bottom: ${props => (props.isLast ? 0 : 100)}px;
  padding-top: 100px;
  position: relative;
  z-index: 1;

  ${mediaQuery(2)} {
    display: block;
  }

  &::before,
  &::after {
    background-color: ${colors.greyBlue};
    content: '';
    display: block;
    height: calc(100% + 16px);
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-4px) translateY(-8px);
    width: 8px;
    z-index: -1;
  }

  &::after {
    height: ${props => (props.isLast ? '200%' : 'calc(100% + 16px)')};
    top: 50%;
  }
`;
