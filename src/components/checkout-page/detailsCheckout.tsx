import { Caption, Text } from "@/ui/typography";
import { Divider } from "@/ui/divider";
import { Details, ProductDetail, ProductInfo } from "./styled";
import { priceFormat } from "@/utils";

type Props = {
  name: string;
  unit_cost: number;
  images: Array<{ url: string }>;
};

export function DetailsCheckout({ name, unit_cost, images }: Props) {
  return (
    <Details>
      <Caption $bold>Resumen del pedido</Caption>
      <Divider />
      <ProductDetail>
        <img src={images[0].url} alt={name} />
        <div>
          <Text>{name}</Text>
          <Text>{priceFormat(unit_cost)}</Text>
        </div>
      </ProductDetail>
      <Divider />
      <ProductInfo>
        <Text>1 ITEM:</Text>
        {priceFormat(unit_cost)}
        <Text></Text>
      </ProductInfo>
      <ProductInfo>
        <Text>ENVÍO:</Text>
        <Text>FREE</Text>
      </ProductInfo>
      <ProductInfo>
        <Text $bold>TOTAL:</Text>
        <Text $bold>{priceFormat(unit_cost)}</Text>
      </ProductInfo>
    </Details>
  );
}
