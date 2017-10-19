// Externals
import styled from 'styled-components';

// Variables
import { mq, sizes } from '../../styles/variables';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${mq.sm} {
    max-width: calc(${sizes.sm}px - 3rem);
  }

  ${mq.md} {
    max-width: calc(${sizes.md}px - 3rem);
  }

  ${mq.lg} {
    max-width: calc(${sizes.lg}px - 3rem);
  }

  ${mq.xl} {
    max-width: calc(${sizes.xl}px - 3rem);
  }
`;
