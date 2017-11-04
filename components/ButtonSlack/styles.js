// Externals
import styled from 'styled-components';

// Variables
import { colors, gradients, times } from '../../styles/variables';

export default styled.a`
  align-items: center;
  background: ${gradients.pink};
  border-radius: 24px;
  color: ${colors.white};
  display: flex;
  font-size: 1.8rem;
  font-weight: bold;
  height: 46px;
  justify-content: space-between;
  min-width: 180px;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  padding: 0 20px;
  text-decoration: none;
  transition: opacity ${times.medium}ms ease;

  &:hover {
    background: ${colors.pink};
  }
`;
