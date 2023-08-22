import { useMe, useSession } from "@/lib/hooks";
import { BtnSecondary } from "@/ui/buttons";
import { TextField } from "@/ui/text-fields";
import { Subtitle } from "@/ui/typography";
import { Form, Root, Main, Inputs } from "./styled";
import { Loading } from "@/ui/loading";
import { useForm, Controller } from "react-hook-form";

type Inputs = {
  name: string;
  address: string;
  phone_number: string;
};

export function Profile() {
  const { session } = useSession({
    redirectTo: "/signin",
  });

  const { data: user, updateData } = useMe();

  const {
    control,
    formState: { isDirty, isValid, isSubmitted },
    handleSubmit,
  } = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      name: user?.name,
      address: user?.address,
      phone_number: user?.phone_number,
    },
  });

  const onSubmit = async (data: Inputs) => {
    // console.log(data);
    try {
      await updateData(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (session && !user) {
    return <Loading />;
  }
  return (
    <Root>
      <Main>
        <header>
          <Subtitle>Perfil</Subtitle>
        </header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Inputs>
            <Controller
              name="name"
              control={control}
              defaultValue={user?.name || ""}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                minLength: {
                  value: 4,
                  message: "El nombre debe tener al menos 4 caracteres",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField error={error && error?.message} {...field}>
                  Nombre completo
                </TextField>
              )}
            />
            <Controller
              name="address"
              defaultValue={user?.address || ""}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                minLength: {
                  value: 4,
                  message: "El nombre debe tener al menos 4 caracteres",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField error={error && error?.message} {...field}>
                  Dirección
                </TextField>
              )}
            />
            <Controller
              name="phone_number"
              defaultValue={user?.phone_number || ""}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                minLength: {
                  value: 6,
                  message: "El nombre debe tener al menos 6 caracteres",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField error={error && error?.message} {...field}>
                  Teléfono
                </TextField>
              )}
            />
          </Inputs>
          <BtnSecondary disabled={!isDirty || !isValid || isSubmitted}>
            Guardar
          </BtnSecondary>
        </Form>
      </Main>
    </Root>
  );
}
