import styled from "styled-components";
import { MyCard, FooterCard } from "./styled";
import { Caption, Subtitle } from "../typography";
import { priceFormat } from "@/utils";
import Image from "next/image";

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
      <Image
        priority={false}
        src={img_url}
        width={500}
        height={500}
        alt="img-product"
      />
      <FooterCard>
        <Caption>{name}</Caption>
        <Subtitle>{priceFormat(price)}</Subtitle>
      </FooterCard>
    </MyCard>
  );
}
