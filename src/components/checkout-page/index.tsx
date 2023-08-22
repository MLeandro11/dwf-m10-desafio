import { createOrder } from "@/lib/api";
import { useProduct, useSession } from "@/lib/hooks";
import { Loading } from "@/ui/loading";
import { Caption, Title } from "@/ui/typography";
import { Divider } from "@/ui/divider";
import { Container, CheckoutMain, FormCtn } from "./styled";
import { FormCheckout } from "./formCheckout";
import { DetailsCheckout } from "./detailsCheckout";
import { useRouter } from "next/router";

export function Checkout({ query }: { query: string }) {
  const { session } = useSession({
    redirectTo: "/signin",
  });

  const { product } = useProduct(query);
  const router = useRouter();
  const handleSubmit = async (dataForm: any) => {
    try {
      const { url } = await createOrder({
        productId: query,
        orderData: dataForm,
      });
      router.push(url);
    } catch (error) {
      console.error(error);
    }
  };

  if (session || !product) {
    return <Loading />;
  }
  return (
    <Container>
      <Title>Checkout</Title>
      <CheckoutMain>
        <FormCtn>
          <Caption $bold>Detalles del envío</Caption>
          <Divider />
          <FormCheckout onSubmitForm={handleSubmit} />
        </FormCtn>
        <DetailsCheckout
          name={product?.name}
          unit_cost={product?.unit_cost}
          images={product?.images}
        />
      </CheckoutMain>
    </Container>
  );
}
