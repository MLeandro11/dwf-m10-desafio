import styled from "styled-components";

export const SectionMain = styled.section`
  text-align: center;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuickSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 347px;
  /* align-items: center; */
  & > form {
    flex-direction: column;
  }
`;
export const SectionFeaturedProducts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 65px;
  background-color: var(--celeste);
  margin-top: 65px;
  padding: 60px 20px;
  & > h2 {
    text-align: center;
  }
`;
export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 769px) {
    padding: 0;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
