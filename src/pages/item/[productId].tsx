import { Layout } from "@/components/Layout";
import { Product } from "@/components/product-page";
import { getProductById } from "@/lib/api";
import Head from "next/head";
import { Product as ProductType } from "@/types";

export default function ProductPage({ product }: { product: ProductType }) {
  return (
    <>
      <Head>
        <title>{`Desafió E-commerce - ${product?.name}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout withSearch>
        <Product product={product} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
  const { productId } = params;
  const product = await getProductById(productId);

  return { props: product, revalidate: 30 };
}
