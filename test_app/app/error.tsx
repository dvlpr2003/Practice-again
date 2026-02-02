"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{ padding: "50px", textAlign: "center", color: "red" }}>
      <h2>Something went wrong! 💥</h2>
      <p>{error.message}</p>

      {/* The Reset button tries to reload just this part of the page */}
      <button
        onClick={() => reset()}
        style={{ padding: "10px", marginTop: "20px" }}
      >
        Try again
      </button>
    </div>
  );
}
