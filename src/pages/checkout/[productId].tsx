import { Layout } from "@/components/Layout";
import { Checkout } from "@/components/checkout-page";
import Head from "next/head";
import { useRouter } from "next/router";
export default function CheckoutPage() {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Desafió E-commerce - Checkout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout withSearch>
        <Checkout query={query.productId as string} />
      </Layout>
    </>
  );
}
