const MultiPage = async ({
  params,
}: {
  params: Promise<{ id: string; name: string; age: string }>;
}) => {
  const { id, name, age } = await params;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Multi Page</h1>
      <p className="text-xl">ID: {id}</p>
      <p className="text-xl">Name: {name}</p>
      <p className="text-xl">Age: {age}</p>
    </div>
  );
};

export default MultiPage;
