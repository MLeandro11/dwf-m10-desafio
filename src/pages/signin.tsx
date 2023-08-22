import { Layout } from "@/components/Layout";
import { Login } from "@/components/login";
import Head from "next/head";

export default function SigninPage() {
  return (
    <>
      <Head>
        <title>Desafió E-commerce - Signin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Login />
      </Layout>
    </>
  );
}
