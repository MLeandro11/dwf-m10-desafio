import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
`;
export const Subtitle = styled.h2`
  font-size: 32px;
`;

export const Caption = styled.h4<{ $bold?: boolean; color?: string }>`
  font-size: 20px;
  font-weight: ${(props) => (props.$bold ? "700" : "400")};
  color: ${(props) => (props.color ? props.color : "var(--negro)")};
`;
export const Text = styled.p<{ $bold?: boolean; color?: string }>`
  font-size: 16px;
  font-weight: ${(props) => (props.$bold ? "700" : "400")};
  color: ${(props) => (props.color ? props.color : "var(--negro)")};
`;
export const TinyText = styled(Text)`
  font-size: 12px;
`;
