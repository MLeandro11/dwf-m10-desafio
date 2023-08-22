import styled from "styled-components";

export const Section = styled.section`
  padding: 30px 20px;
  margin: auto;
  max-width: 800px;
  width: 100%;
`;

export const Header = styled.header`
  text-wrap: balance;
  margin: 32px 0;
  text-align: center;
`;

export const Article = styled.article`
  display: flex;
  & > .article__img {
    width: 100px;
    & > img {
      width: 100%;
      display: block;
    }
  }
  & > .article__info {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    text-wrap: balance;
    justify-content: space-between;
    padding: 0 10px;
    gap: 6px;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin: 28px 0;
  & > a {
    text-decoration: underline;
  }
`;
