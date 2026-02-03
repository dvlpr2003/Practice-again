"use server";
import { redirect } from "next/navigation";
const SearchPokemon = async (formData: FormData) => {
  const Name = formData.get("pokemonName");
  if (typeof Name === "string") {
    redirect(`/pokemon/${Name.toLowerCase()}`);
  } else return;
};

export { SearchPokemon };
