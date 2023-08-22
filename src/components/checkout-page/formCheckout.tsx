import { SelectField, TextField } from "@/ui/text-fields";
import { Button } from "@/ui/buttons";
import { useMe, useLocationSelector } from "@/lib/hooks";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Form } from "./styled";
import { MercadoPagoIcon } from "@/ui/icons";
import { Inputs } from "@/types";

type Props = {
  onSubmitForm: (e: any) => void;
};

export function FormCheckout({ onSubmitForm }: Props) {
  const { data: user } = useMe();
  const { provinces, cities, getCities } = useLocationSelector();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone_number: user?.phone_number,
      country: "Argentina",
      city: "",
      province: "",
      zip: "",
      street: user?.address,
    },
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => onSubmitForm(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        defaultValue={user?.name || ""}
        control={control}
        rules={{
          required: {
            value: true,
            message: "Debes ingresar un nombre",
          },
          minLength: {
            value: 4,
            message: "El nombre debe tener al menos 4 caracteres",
          },
        }}
        render={({ field }) => (
          <TextField
            // resolver
            readOnly={!!user?.name}
            {...field}
            error={errors.name?.message}
          >
            Nombre y Apellido
          </TextField>
        )}
      />
      <Controller
        name="email"
        defaultValue={user?.email || ""}
        control={control}
        render={({ field }) => (
          <TextField readOnly {...field}>
            Email
          </TextField>
        )}
      />
      <div className="form-group">
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <TextField readOnly {...field}>
              País
            </TextField>
          )}
        />
        <Controller
          name="province"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Debes elegir una provincia",
            },
            onChange: (e) => {
              getCities(e.target.value);
            },
          }}
          render={({ field }) => (
            <SelectField
              error={errors.province?.message}
              options={provinces}
              {...field}
            >
              Provincia
            </SelectField>
          )}
        />
        <Controller
          name="city"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Debes elegir una ciudad",
            },
          }}
          render={({ field }) => (
            <SelectField
              error={errors.city?.message}
              disabled={!cities.length}
              options={cities}
              {...field}
            >
              Ciudad
            </SelectField>
          )}
        />

        <Controller
          name="zip"
          control={control}
          rules={{
            required: {
              value: true,
              message: "El código postal es requerido",
            },
            minLength: {
              value: 3,
              message: "El código postal debe tener un mim de 4 caracteres",
            },
          }}
          render={({ field }) => (
            <TextField error={errors.zip?.message} {...field}>
              Código postal
            </TextField>
          )}
        />
      </div>
      <Controller
        name="street"
        defaultValue={user?.address || ""}
        rules={{
          required: {
            value: true,
            message: "Debes ingresar una dirección",
          },
          minLength: {
            value: 4,
            message: "La dirección debe tener al menos 4 caracteres",
          },
        }}
        control={control}
        render={({ field }) => (
          <TextField error={errors.street?.message} {...field}>
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
            message: "Debes ingresar un número de teléfono",
          },
          minLength: {
            value: 6,
            message: "El número de teléfono debe tener al menos 6 caracteres",
          },
        }}
        render={({ field }) => (
          <TextField error={errors.phone_number?.message} {...field}>
            Número de teléfono
          </TextField>
        )}
      />
      <Button>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          Proceder al pago
          <MercadoPagoIcon />
        </div>
      </Button>
    </Form>
  );
}
