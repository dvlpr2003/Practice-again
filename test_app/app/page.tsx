export default function Home() {
  return (
    // 1. The Container: Centered on screen, light gray background
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* 2. The Card: White, rounded, shadow */}
      <div className="w-90 rounded-xl bg-amber-300 p-6 shadow-lg">
        {/* 3. The Content */}
        <h1 className="text-xl font-bold text-gray-900">Hello, Tailwind!</h1>
        <p className="mt-2 text-gray-600">
          I am learning how to style layouts without writing a single line of
          CSS.
        </p>

        {/* 4. The Button */}
        <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Click Me
        </button>
      </div>
    </div>
  );
}
