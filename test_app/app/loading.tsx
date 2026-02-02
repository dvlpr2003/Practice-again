export default function Loading() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      {/* Simple Loading Spinner Text */}
      <h1 style={{ fontSize: "30px", color: "#666" }}>Loading Pokedex... ⏳</h1>

      {/* Or a fake skeleton layout */}
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              height: "150px",
              background: "#eee",
              borderRadius: "10px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
