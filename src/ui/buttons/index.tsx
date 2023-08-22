import styled from "styled-components";

export const Button = styled.button<{ bg?: string; color?: string }>`
  padding: 7px;
  border-radius: 8px;
  background-color: ${(props) => (props.bg ? props.bg : "var(--azul)")};
  color: ${(props) => (props.color ? props.color : "var(--blanco)")};
  min-width: 148px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    filter: drop-shadow(2px 4px 6px black);
    filter: brightness(0.9);
  }
  &:disabled {
    border: 2px solid var(--gris);
    background-color: var(--gris);
    color: var(--negro);
    cursor: not-allowed;
  }
  &:active {
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.3);
  }
`;
export const BtnSecondary = styled(Button)`
  background-color: var(--naranja);
  color: var(--negro);
`;
export const BtnSession = styled(Button)`
  background-color: var(--fucsia);
`;
