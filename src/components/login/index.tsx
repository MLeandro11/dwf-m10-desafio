import { BtnSecondary } from "@/ui/buttons";
import { Input, TextField } from "@/ui/text-fields";
import { Caption, Subtitle, Text } from "@/ui/typography";
import { Root, CodeCnt, EmailCnt, Form, Main } from "./styled";
import { useState } from "react";
import { getToken, sendCode } from "../../lib/api";
import { useRouter } from "next/router";
import { useSWRConfig } from "swr";
import { Loading } from "@/ui/loading";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export function Login() {
  const [email, setEmail] = useState(false);
  const router = useRouter();
  const { mutate } = useSWRConfig();

  const {
    control: controlEmail,
    handleSubmit: handleSubmitEmail,
    getValues: getValuesEmail,
  } = useForm<{
    email: string;
  }>({
    mode: "all",
  });
  const { control: controlCode, handleSubmit: handleSubmitCode } = useForm<{
    code: string;
  }>({
    mode: "all",
  });

  const onSubmitEmail: SubmitHandler<{ email: string }> = async ({ email }) => {
    try {
      await sendCode(email);
      setEmail(true);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitCode: SubmitHandler<{ code: string }> = async ({ code }) => {
    const { email } = getValuesEmail();
    try {
      await getToken(email, code);
      mutate("/me");
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Root>
      <Main>
        <Subtitle>Ingresar</Subtitle>
        {!email ? (
          <EmailCnt>
            <Form onSubmit={handleSubmitEmail(onSubmitEmail)}>
              <Controller
                name="email"
                defaultValue=""
                control={controlEmail}
                rules={{
                  required: {
                    value: true,
                    message: "Debes ingresar un correo electrónico",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "El correo no es válido",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField {...field} error={error && error?.message}>
                    Email
                  </TextField>
                )}
              />
              <BtnSecondary>Continuar</BtnSecondary>
            </Form>
          </EmailCnt>
        ) : (
          <CodeCnt>
            <Subtitle>Código</Subtitle>
            <Form onSubmit={handleSubmitCode(onSubmitCode)}>
              {/* <Caption>{email}</Caption> */}
              <Controller
                name="code"
                defaultValue=""
                control={controlCode}
                rules={{
                  required: {
                    value: true,
                    message: "Debes ingresar tu código",
                  },
                  minLength: {
                    value: 4,
                    message: "El código debe tener al menos 4 caracteres",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    // resolver
                    {...field}
                    error={error && error?.message}
                  />
                )}
              />
              <Text>Te enviamos un código a tu correo</Text>
              <BtnSecondary>Ingresar</BtnSecondary>
            </Form>
          </CodeCnt>
        )}
      </Main>
    </Root>
  );
}
