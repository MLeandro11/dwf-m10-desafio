import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { Thanks } from "@/components/thanks-page";

export default function ThanksPage() {
  const { external_reference } = useRouter().query;

  return (
    <>
      <Head>
        <title>Desafió E-commerce - Thanks</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Thanks orderId={external_reference as string} />
      </Layout>
    </>
  );
}
