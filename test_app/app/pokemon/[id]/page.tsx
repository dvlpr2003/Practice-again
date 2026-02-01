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
  const data: PokemonDetails = await res.json();
  console.log(data);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
      <img
        src={data.sprites.front_default}
        alt={data.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default Pokemon;
