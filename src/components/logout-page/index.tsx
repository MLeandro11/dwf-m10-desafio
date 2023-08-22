import { Button } from "@/ui/buttons";
import { Subtitle, Text } from "@/ui/typography";
import { useRouter } from "next/router";
import { useSession } from "@/lib/hooks";
import { Loading } from "@/ui/loading";
import { Section } from "./styled";
import { LogoutIcon } from "@/ui/icons";
export function Logout() {
  const { logout, session } = useSession({
    redirectTo: "/signin",
  });
  const router = useRouter();
  const handleClick = () => {
    logout();
    router.push("/signin");
  };
  if (session) {
    return <Loading />;
  }

  return (
    <Section>
      <Subtitle>Logout</Subtitle>
      <Text>Muchas gracias por visitarnos</Text>
      <Button onClick={handleClick}>
        Cerrar sesión <LogoutIcon />
      </Button>
    </Section>
  );
}
