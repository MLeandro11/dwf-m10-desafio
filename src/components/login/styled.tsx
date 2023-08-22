import styled from "styled-components";
export const Root = styled.section`
  padding: 30px 20px;
  @media (min-width: 769px) {
    padding: 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    h2 {
      text-align: center;
    }
  }
`;
export const Main = styled.main`
  width: 100%;
  max-width: 333px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
export const EmailCnt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const CodeCnt = styled(EmailCnt)`
  display: flex;
  * {
    text-align: center;
  }
  @media (max-width: 769px) {
    h2 {
      text-align: left;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
