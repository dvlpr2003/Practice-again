import { PokeButton } from "@/Components/Button";
import { notFound } from "next/navigation";
import Image from "next/image";
interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
}

interface Params {
  id: string;
}

const Pokemon = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    notFound();
  }

  const data: PokemonDetails = await res.json();
  console.log(data);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={300}
        height={300}
      />
      <h2 className="text-2xl font-semibold mt-4">Types:</h2>
      <ul className="list-disc list-inside">
        {data.types.map((typeInfo) => (
          <li key={typeInfo.type.name} className="text-lg">
            {typeInfo.type.name}
          </li>
        ))}
      </ul>
      <PokeButton name={data.name} />
    </div>
  );
};

export default Pokemon;

const generateMetadata = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    return {
      title: "Pokemon Not Found",
    };
  }

  const data: PokemonDetails = await res.json();

  return {
    title: data.name,
    description: `Details and information about ${data.name}.`,
  };
};
export { generateMetadata };
