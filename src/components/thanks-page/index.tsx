import { useOrder } from "@/lib/hooks";
import { Divider } from "@/ui/divider";
import { Loading } from "@/ui/loading";
import { Caption, Subtitle, Text } from "@/ui/typography";
import { priceFormat } from "@/utils";
import Link from "next/link";
import { Section, Header, Article, Footer } from "./styled";
import Image from "next/image";

export function Thanks({ orderId }: { orderId: string }) {
  const { order, error, loading } = useOrder(orderId);

  if (loading || !order) {
    return <Loading />;
  }
  return (
    <Section>
      <Header>
        <Subtitle>Gracias por tu compra {order?.additionalInfo.name}</Subtitle>
        <Caption>
          Pronto recibirá un correo electrónico de confirmación.
        </Caption>
      </Header>
      <Divider />
      <main>
        <Article>
          <div className="article__img">
            <Image
              priority
              src={order?.product.image}
              width={500}
              height={500}
              alt="img-product"
            />
          </div>
          <div className="article__info">
            <Caption $bold>{order?.product.name}</Caption>
            <Text>{priceFormat(order?.product.price)}</Text>
          </div>
        </Article>
        <Divider />
        <div style={{ textAlign: "left" }}>
          <Caption $bold>Dirección de envío</Caption>
          <Text>
            {order?.additionalInfo.street} {order?.additionalInfo.city}{" "}
            {order?.additionalInfo.zip}
          </Text>
          <Text>{order?.additionalInfo.province}</Text>
          <Text>{order?.additionalInfo.phone_number}</Text>
        </div>
        <Divider />
      </main>
      <Footer>
        <Link href={"/"}>Continuar comprando</Link>
      </Footer>
    </Section>
  );
}
