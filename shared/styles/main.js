import styled, { css } from 'styled-components';

export const LayoutContent = styled.div`
  padding: 20px 40px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const centerVertically = css`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
