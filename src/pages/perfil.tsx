import { Layout } from "@/components/Layout";
import Head from "next/head";
import { Profile } from "@/components/profile-page";
export default function PerfilPage() {
  return (
    <>
      <Head>
        <title>Desafió E-commerce - Perfil</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Profile />
      </Layout>
    </>
  );
}
