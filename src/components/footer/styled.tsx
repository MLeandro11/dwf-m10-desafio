import styled from "styled-components";

export const MyFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--negro);
  padding: 70px 80px;
  gap: 100px;
  @media (max-width: 769px) {
    padding: 60px 20px;
    gap: 200px;
  }
`;
export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 769px) {
    flex-direction: column;
    gap: 100px;
  }
`;
export const NavFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  & > a:hover {
    cursor: pointer;
    filter: invert(0.3);
  }
`;

export const Redes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: flex-end;
  @media (max-width: 769px) {
    align-self: flex-start;
  }
`;
export const SocialLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
