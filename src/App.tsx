import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="border flex flex-col gap-5 justify-center align-middle h-screen">
      <div className="flex justify-center gap-8">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="w-24 animate-spin duration-3s"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold text-blue-600 text-center">
        Vite + React
      </h1>
      <div className="flex flex-col gap-3">
        <button
          className="bg-gray-200 p-2 mx-auto hover:bg-gray-300 active:bg-blue-300 rounded-md"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <Link
          to={"/home-page"}
          className="bg-gray-200 p-2 mx-auto hover:bg-gray-300 active:bg-blue-300 rounded-md"
        >
          Jimy Nicanor Home Page
        </Link>
        <p className="mx-auto">
          Edit <code className="font-bold">src/App.tsx</code> and save to test
          HMR
        </p>
      </div>
      <p className="absolute bottom-4 left-1/2  -translate-x-1/2 text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
