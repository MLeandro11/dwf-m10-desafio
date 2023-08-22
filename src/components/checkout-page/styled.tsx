import styled from "styled-components";

export const Container = styled.section`
  padding: 30px 20px;
  @media (min-width: 769px) {
    padding: 30px 80px;
  }
`;
export const CheckoutMain = styled.main`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 769px) {
    flex-direction: row;
    max-width: 1200px;
    margin: auto;
  }
`;

export const FormCtn = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Details = styled.section`
  /* background-color: var(--gris); */
  padding: 20px;
  height: fit-content;
  border: 2.3px solid var(--gris);
`;
export const ProductDetail = styled.div`
  display: flex;
  gap: 10px;
  line-height: 1.3;
  & > img {
    width: 120px;
    height: 120px;
    display: block;
    object-fit: cover;
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  margin-bottom: 6px;
  & :nth-child(1) {
    margin-right: auto;
  }
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > .form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;
