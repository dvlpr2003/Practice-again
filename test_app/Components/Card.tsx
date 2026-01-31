interface CardProps {
  name: string;
  skills: string[];
  isHired: boolean;
  onFire: () => void;
}

const Card = ({ name, skills, isHired, onFire }: CardProps) => {
  return (
    <div className="border border-white bg-gray-50 h-11/12 text-black">
      <h1 className="text-2xl">{name}</h1>
      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ol>
      <p>{isHired ? "Hired" : "Not Hired"}</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={onFire}
      >
        Fire
      </button>
    </div>
  );
};

export { Card };
