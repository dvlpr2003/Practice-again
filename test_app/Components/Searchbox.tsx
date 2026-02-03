import { SearchPokemon } from "@/app/action";

const SearchBox = () => {
  return (
    <form action={SearchPokemon}>
      <input
        type="text"
        name="pokemonName"
        placeholder="Enter Pokemon Name"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
