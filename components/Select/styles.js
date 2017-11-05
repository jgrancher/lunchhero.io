// Externals
import styled from 'styled-components';

// Variables
import { colors, spaces } from '../../styles/variables';

export default styled.select`
  appearance: none;
  background-color: ${colors.white};
  background-image: url('../../static/svgs/icon-dropdown.svg');
  background-position: 118px 21px;
  background-repeat: no-repeat;
  background-size: 12px 10px;
  border-radius: 25px;
  border: 0;
  color: ${colors.pink};
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  margin: 0 5px;
  min-width: 150px;
  padding: 0 ${spaces[2]}px;

  option {
    margin: 0;
  }
`;
