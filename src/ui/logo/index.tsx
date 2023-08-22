import styled from "styled-components";
import Logo from "./Logo.svg";

const LogoWhite = styled(Logo)`
  filter: brightness(0) invert(1);
`;

export { Logo, LogoWhite };
