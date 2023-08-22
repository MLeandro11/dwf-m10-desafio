import { LogoWhite } from "@/ui/logo";
import { BurguerMenu, Cancel } from "@/ui/icons";
import Link from "next/link";
import { MyHeader, SectionBottom, SectionTop } from "./styled";
import { useState } from "react";
import { Session } from "./session";
import { Nav, StyledMenu } from "./styled";
import { Subtitle } from "@/ui/typography";
import { useMe } from "@/lib/hooks";

export function Header({ children }: { children?: React.ReactNode }) {
  const [menu, showMenu] = useState(false);
  const { data: user } = useMe();
  const onClickMenu = () => {
    showMenu(!menu);
  };
  return (
    <MyHeader>
      <SectionTop>
        <Link href="/">
          <LogoWhite />
        </Link>
        <BurguerMenu onClick={() => showMenu(!menu)} />
      </SectionTop>
      <SectionBottom>{children}</SectionBottom>
      <Session />
      {menu && (
        <StyledMenu $menu={menu}>
          <Cancel onClick={() => showMenu(!menu)} />
          <Nav>
            <ul>
              {!user && (
                <li onClick={onClickMenu}>
                  <Link href="/signin">
                    <Subtitle>Ingresar</Subtitle>
                  </Link>
                </li>
              )}
              <li onClick={onClickMenu}>
                <Link href="/perfil">
                  <Subtitle>Mi perfil</Subtitle>
                </Link>
              </li>
              <li onClick={onClickMenu}>
                <Link href="/">
                  <Subtitle>Buscar</Subtitle>
                </Link>
              </li>
            </ul>
          </Nav>
          <Session />
        </StyledMenu>
      )}
    </MyHeader>
  );
}
