import styled from "styled-components";
import { TinyText } from "../typography";
import React, {
  ReactNode,
  InputHTMLAttributes,
  forwardRef,
  SelectHTMLAttributes,
} from "react";

export const Input = styled.input<{ $dark?: boolean }>`
  border: 3px solid
    ${(props) => (props.$dark ? "var(--blanco)" : "var(--negro)")};
  color: ${(props) => (props.$dark ? "var(--blanco)" : "var(--negro)")};
  border-radius: 8px;
  background-color: transparent;
  padding: 9px;
  font-size: 16px;
  width: 100%;
  &::placeholder {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 9px;
  font-size: 16px;
  border-radius: 8px;
  border: 3px solid var(--negro);
`;

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  error?: string;
}
export const TextField = React.forwardRef(
  (
    { error, children, ...props }: TextFieldProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <label>
        <TinyText>{children}</TinyText>
        <Input ref={ref} {...props} />
        {error && <TinyText color="red">{error}</TinyText>}
      </label>
    );
  }
);

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
  error?: string;
}

export const SelectField = forwardRef(
  (
    { error, children, options, ...props }: SelectProps,
    ref: React.Ref<HTMLSelectElement>
  ) => {
    return (
      <label>
        <TinyText>{children}</TinyText>
        <Select {...props} ref={ref}>
          <option value=""></option>
          {options?.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </Select>
        {error && <TinyText color="red">{error}</TinyText>}
      </label>
    );
  }
);
