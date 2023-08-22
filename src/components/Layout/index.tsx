import { Footer } from "../footer";
import { Header } from "../header";
import { Main, Root } from "./styled";
import { SearchForm } from "../searchForm";
type Props = {
  children: React.ReactNode;
  withSearch?: boolean;
};
export function Layout({ children, withSearch }: Props) {
  return (
    <Root>
      <Header>{withSearch && <SearchForm dark />}</Header>
      <Main>{children}</Main>
      <Footer />
    </Root>
  );
}
