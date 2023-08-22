import styled from "styled-components";

export const Section = styled.section`
  padding: 30px 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > h2 {
    text-align: center;
  }
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
`;
