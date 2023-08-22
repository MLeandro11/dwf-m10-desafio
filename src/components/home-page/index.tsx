import { Layout } from "@/components/Layout";
import { SearchForm } from "@/components/searchForm";
import { Card } from "@/ui/card";
import { Subtitle, Title } from "@/ui/typography";
import {
  Products,
  SectionFeaturedProducts,
  SectionMain,
  QuickSearch,
} from "./styled";
import Link from "next/link";

export function Home({ productsFeatured }: any) {
  return (
    <>
      <SectionMain>
        <QuickSearch>
          <Title>
            El mejor
            <br />
            e-commerce
          </Title>
          <SearchForm />
        </QuickSearch>
      </SectionMain>
      <SectionFeaturedProducts>
        <Subtitle>Productos destacados</Subtitle>
        <Products>
          {productsFeatured?.map((product: any) => (
            <Link key={product.objectID} href={`/item/${product.objectID}#top`}>
              <Card
                img_url={product.images[0].url}
                name={product.name}
                price={product.unit_cost}
              />
            </Link>
          ))}
        </Products>
      </SectionFeaturedProducts>
    </>
  );
}
