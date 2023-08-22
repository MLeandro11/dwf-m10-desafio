import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BtnSecondary, BtnSession, Button } from "@/ui/buttons";
import { Card } from "@/ui/card";
import { InstagramIcon, TwitterIcon } from "@/ui/icons";
import { Logo } from "@/ui/logo";
import { Input } from "@/ui/text-fields";
import { Caption, Title, Subtitle, Text } from "@/ui/typography";
import Head from "next/head";

export default function UiPage() {
  return (
    <>
      <Head>
        <title>dwf-m10-desafio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <br />
        <Logo />
        <br />

        <Title>dwf-desafio modulo numero 10</Title>
        <br />
        <Subtitle>Desafio</Subtitle>
        <br />
        <div>
          <Button>Click</Button>
          <BtnSecondary>Click</BtnSecondary>
          <BtnSession>Click</BtnSession>

          <div style={{ backgroundColor: "black", padding: 12 }}>
            <Input $dark placeholder="Placeholder" />
            <br />
            <br />
            <InstagramIcon />
            <TwitterIcon />
          </div>
          <br />
          <Input placeholder="Placeholder" />
        </div>

        <br />
        <Caption $bold>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Caption>
        <br />
        <Caption>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Caption>
        <br />
        <Text $bold>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          natus laboriosam tempora in assumenda rem ipsam placeat voluptatum ex
          minus quod veritatis, porro quia, aperiam, quasi officiis asperiores
          atque.
        </Text>
        <br />
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          natus laboriosam tempora in assumenda rem ipsam placeat voluptatum ex
          minus quod veritatis, porro quia, aperiam, quasi officiis asperiores
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          natus laboriosam tempora in assumenda rem ipsam placeat voluptatum ex
          minus quod veritatis, porro quia, aperiam, quasi officiis asperiores
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          natus laboriosam tempora in assumenda rem ipsam placeat voluptatum ex
          minus quod veritatis, porro quia, aperiam, quasi officiis asperiores
        </Text>
        <br />
        <div style={{ padding: 12 }}></div>
      </main>
      <Footer />
    </>
  );
}
