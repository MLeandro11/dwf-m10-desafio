import { BurguerMenu, Cancel } from "@/ui/icons";
import styled from "styled-components";
import { StyledSearch } from "../searchForm";

export const StyledMenu = styled.div<{ $menu: boolean }>`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--negro);
  display: ${({ $menu }) => ($menu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  text-align: center;
  color: var(--blanco);
  @media (min-width: 969px) {
    display: none;
  }
  & > ${Cancel} {
    position: absolute;
    top: 32px;
    right: 32px;
  }
`;

export const Nav = styled.nav`
  & ul {
    list-style: none;
    flex-direction: column;
    padding: 0;
    display: flex;
    gap: 48px;
    & li {
      cursor: pointer;
      &:hover {
        filter: invert(0.3);
      }
    }
  }
`;
export const StyledSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  & > * {
    &:hover {
      filter: invert(0.3);
    }
  }
  & > p {
    color: var(--fucsia);
    cursor: pointer;
  }
  & > h4 {
    color: var(--blanco);
  }
`;

export const MyHeader = styled.header`
  padding: 20px 23px;
  background-color: var(--negro);
  & > ${StyledSession} {
    display: none;
  }
  @media (min-width: 969px) {
    & > ${StyledSession} {
      display: inherit;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 30px 80px;
  }
`;
export const SectionTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 969px) {
    & > ${BurguerMenu} {
      display: none;
    }
  }
`;
export const SectionBottom = styled.div`
  display: contents;
  & > ${StyledSearch} {
    flex-direction: column;
    margin: 0 auto;
    margin-top: 30px;
    max-width: 447px;
  }
  @media (min-width: 969px) {
    & > ${StyledSearch} {
      flex-direction: row;
      margin: 0;
      gap: 14px;
    }
  }
`;
