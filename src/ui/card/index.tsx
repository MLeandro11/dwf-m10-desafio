import styled from "styled-components";
import { MyCard, FooterCard } from "./styled";
import { Caption, Subtitle } from "../typography";
import { priceFormat } from "@/utils";

export function Card({
  name,
  price,
  img_url,
}: {
  name: string;
  price: number;
  img_url: string;
}) {
  return (
    <MyCard>
      <img src={img_url} width="100%" height="100%" alt="img-product" />
      <FooterCard>
        <Caption>{name}</Caption>
        <Subtitle>{priceFormat(price)}</Subtitle>
      </FooterCard>
    </MyCard>
  );
}
