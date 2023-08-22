import styled from "styled-components";

export const Root = styled.section`
  padding: 30px 20px;
  @media (min-width: 769px) {
    padding: 133px 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
`;
export const Main = styled.main`
  width: 100%;
  max-width: 455px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 34px;
  & > button {
    padding: 15px;
  }
`;
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
