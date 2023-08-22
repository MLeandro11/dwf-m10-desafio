import styled from "styled-components";

export const Root = styled.section`
  padding: 40px 20px;
  & > h4 {
    cursor: pointer;
    text-align: center;
    color: var(--azul);
    text-decoration: underline;
    margin-top: 36px;
  }
  @media (min-width: 769px) {
    padding: 30px 80px;
  }
`;

export const Products = styled.div`
  gap: 20px;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 32px;

  @media (min-width: 769px) {
  }
`;
