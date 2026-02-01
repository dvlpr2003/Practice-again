"use client";

interface PokeButtonProps {
  name: string;
  obnClick?: () => void;
}
const PokeButton = ({ name, obnClick }: PokeButtonProps) => {
  const handleClick = () => {
    alert(`You clicked on ${name}`);
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export { PokeButton };
