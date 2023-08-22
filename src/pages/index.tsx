import { Layout } from "@/components/Layout";
import { Home } from "@/components/home-page";
import { getFeaturedProducts } from "@/lib/api";
import Head from "next/head";

export default function HomePage({ products }: any) {
  return (
    <>
      <Head>
        <title>Desafió E-commerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Home productsFeatured={products} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const products = await getFeaturedProducts();

  return {
    props: {
      products,
    },

    revalidate: 60, // In seconds
  };
}
