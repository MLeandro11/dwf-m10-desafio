import { Layout } from "@/components/Layout";
import { Logout } from "@/components/logout-page";

import Head from "next/head";

export default function LogoutPage() {
  return (
    <>
      <Head>
        <title>Desafió E-commerce - Logout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Logout />
      </Layout>
    </>
  );
}
