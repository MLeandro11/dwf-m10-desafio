import { useProducts } from "@/lib/hooks";
import { Card } from "@/ui/card";
import Link from "next/link";
import { Products, Root } from "./styled";
import { Loading } from "@/ui/loading";
import { Caption, Text } from "@/ui/typography";
import { Product } from "@/types";

export function ResultsProducts({ query }: { query: string }) {
  const { products, totalProducts, theEndScroll, size, setSize, loading } =
    useProducts(query, 3);
  if (loading) {
    return <Loading />;
  }
  return (
    <Root>
      <Text>
        {products.length} resultados de {totalProducts}
      </Text>
      <Products>
        {products.map((product: Product) => (
          <Link key={product.objectID} href={`/item/${product.objectID}#top`}>
            <Card
              img_url={product.images[0].url}
              name={product.name}
              price={product.unit_cost}
            />
          </Link>
        ))}
      </Products>
      {!theEndScroll && (
        <Caption onClick={() => setSize(size + 1)}>{"ver más >"}</Caption>
      )}
    </Root>
  );
}
