import Image from "next/image";
import Link from "next/link";
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
  console.log(data.results);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data.results.map((pokemon, i) => (
        <Link
          href={`/pokemon/${i + 1}`}
          key={pokemon.name}
          className="border border-white bg-gray-50 h-11/12 text-black p-4"
        >
          <h1 className="text-2xl">{pokemon.name}</h1>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
            alt={pokemon.name}
            width={100}
            height={100}
          />
        </Link>
      ))}
    </div>
  );
};

export default Devs;
