import { InstagramIcon, TwitterIcon } from "@/ui/icons";
import { Caption, Text } from "@/ui/typography";
import Link from "next/link";
import { MyFooter, SocialLink, Links, NavFooter, Redes } from "./styled";
import { useMe } from "@/lib/hooks";

export function Footer() {
  const { data: user } = useMe();
  return (
    <MyFooter>
      <Links>
        <NavFooter>
          {!user && (
            <Link href="/signin">
              <Text color="var(--blanco)">Ingresar</Text>
            </Link>
          )}
          <Link href="/perfil">
            <Text color="var(--blanco)">Mi perfil</Text>
          </Link>
          <Link href="/">
            <Text color="var(--blanco)">Buscar</Text>
          </Link>
          {user && (
            <Link href="/logout">
              <Text color="var(--blanco)">Logout</Text>
            </Link>
          )}
        </NavFooter>
        <Redes>
          <Caption color="var(--blanco)">Redes</Caption>
          <SocialLink>
            <InstagramIcon />
            <Text color="var(--blanco)">Instagram</Text>
          </SocialLink>
          <SocialLink>
            <TwitterIcon />
            <Text color="var(--blanco)">Twitter</Text>
          </SocialLink>
        </Redes>
      </Links>
      <Text color="var(--blanco)">Copyright © 2022</Text>
    </MyFooter>
  );
}
