import { BtnSession } from "@/ui/buttons";
import { StyledSession } from "./styled";
import { Caption, Text } from "@/ui/typography";
import Link from "next/link";
import { useMe } from "@/lib/hooks";
import { useRouter } from "next/router";

export function Session() {
  const router = useRouter();
  const { data: user, error } = useMe();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <StyledSession>
      {!user?.email || error ? (
        <BtnSession onClick={() => handleClick("/signin")}>Ingresar</BtnSession>
      ) : (
        <>
          <Caption>{user?.email}</Caption>
          <Text onClick={() => handleClick("/logout")}>Cerrar sesión</Text>
        </>
      )}
    </StyledSession>
  );
}
