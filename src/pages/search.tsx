import { Layout } from "@/components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import { ResultsProducts } from "@/components/results-page";

export default function SearchPage() {
  const { query } = useRouter().query;
  return (
    <>
      <Head>
        <title>Desafió E-commerce - Buscar productos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout withSearch>
        <ResultsProducts query={query as string} />
      </Layout>
    </>
  );
}
