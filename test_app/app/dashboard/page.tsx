interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

const Devs = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data: PokemonResponse = await res.json();
  console.log(data.results[0].name);

  return <div className="grid grid-cols-3 gap-4 p-4">hello</div>;
};

export default Devs;
