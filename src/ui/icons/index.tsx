import InstagramIcon from "./instagram.svg";
import TwitterIcon from "./twitter.svg";
import BurguerIcon from "./Burguer.svg";
import styled from "styled-components";
import MercadoPagoIcon from "./mp-icon.svg";
import LogoutIcon from "./logout-icon.svg";
import CancelIcon from "./cancel-icon.svg";

const BurguerMenu = styled(BurguerIcon)`
  cursor: pointer;
`;
const Cancel = styled(CancelIcon)`
  cursor: pointer;
`;

export {
  InstagramIcon,
  TwitterIcon,
  BurguerMenu,
  MercadoPagoIcon,
  LogoutIcon,
  Cancel,
};
