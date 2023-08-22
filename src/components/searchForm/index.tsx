import { BtnSecondary, Button } from "@/ui/buttons";
import { Input } from "@/ui/text-fields";
import { useRouter } from "next/router";
import styled from "styled-components";

export const StyledSearch = styled.form`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export function SearchForm({ dark }: { dark?: boolean }) {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).query.value.trim();
    if (query.length <= 1) return;
    router.push(`/search?query=${query}`);
  };
  return (
    <StyledSearch onSubmit={handleSubmit}>
      <Input $dark={dark} type="search" placeholder="Buscar" name="query" />
      {dark ? <BtnSecondary>Buscar</BtnSecondary> : <Button>Buscar</Button>}
    </StyledSearch>
  );
}
