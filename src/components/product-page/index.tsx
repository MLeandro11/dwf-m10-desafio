import { Subtitle, Title, Text } from "@/ui/typography";
import Link from "next/link";
import {
  Section,
  Main,
  ProductImg,
  ProductInfo,
  FooterInfo,
  HeaderInfo,
} from "./styled";
import { priceFormat } from "@/utils";
import { Product as ProductType } from "@/types";

export function Product({ product }: { product: ProductType }) {
  return (
    <Section id="top">
      <Main>
        <ProductImg>
          <img src={product?.images[0].url} alt={product.name} />
        </ProductImg>
        <ProductInfo>
          <HeaderInfo>
            <Subtitle>{product.name}</Subtitle>
            <Title>{priceFormat(product.unit_cost)}</Title>
            <Link href={`/checkout/${product.objectID}`}>
              <Subtitle>Comprar</Subtitle>
            </Link>
          </HeaderInfo>
          <FooterInfo>
            <Text>{product.description}</Text>
          </FooterInfo>
        </ProductInfo>
      </Main>
    </Section>
  );
}
