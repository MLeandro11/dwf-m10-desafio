import styled from "styled-components";

export const Section = styled.section`
  padding: 20px;
  /* min-height: 65vh; */
  @media (min-width: 969px) {
    padding: 90px 80px;
  }
`;
export const Main = styled.main`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 40px;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
export const ProductImg = styled.figure`
  flex: 1;
  min-width: 30vw;
  height: 424px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
  @media (min-width: 969px) {
    & > img {
      object-fit: contain;
      background-color: var(--gris);
      border-radius: 16px;
    }
  }
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1, 1, 421px; */
  gap: 30px;
  @media (min-width: 669px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 969px) {
    flex-basis: 421px;
    flex-direction: column;
    align-items: normal;
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 769px) {
    & > h1,
    h2 {
      margin-left: 10px;
    }
  }
  & > a {
    padding: 10px;
    background-color: var(--celeste);
    display: block;
    text-align: center;
    border-radius: 4px;
    transition: filter 0.3s ease-in-out;
  }
  & > a:hover {
    filter: brightness(0.9);
  }
`;
export const FooterInfo = styled.div`
  line-height: 1.5;
  @media (min-width: 969px) {
    & > p {
      width: min(100%, 40ch);
    }
  }
`;
