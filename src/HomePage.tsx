import { useEffect, useState } from "react";

export const HomePage = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => setTimer((prev) => prev + 1), 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="h-screen border-blue-500 border-4 bg-black flex justify-center items-center flex-col gap-8">
      <div className="absolute right-2 bottom-2 text-yellow-400">{timer}s</div>
      {timer <= 9 && (
        <>
          <h1 className="text-gray-50 text-9xl animate-fade duration-3s text-center">
            Jimy Nicanor
          </h1>
          <h2 className="text-gray-50 text-6xl animate-fade duration-3s delay-3s opacity-0">
            elVengador
          </h2>
        </>
      )}

      {timer > 10 && timer < 19 && (
        <p className="flex flex-col justify-center items-center">
          <span className="text-gray-50 text-13xl animate-fade duration-3s">
            T
          </span>
          <span className="text-gray-50 text-6xl text-center animate-fade duration-3s delay-3s opacity-0">
            Shaped Frontend Developer
          </span>
        </p>
      )}

      {timer > 23 && (
        <header className="w-screen animate-fade">
          <nav className="flex justify-between items-center max-w-5xl m-auto p-4">
            <div>
              <h1 className="text-yellow-400 font-bold text-base">
                Jimy Nicanor
              </h1>
              <h2 className="text-white text-xs">elVengador</h2>
            </div>
            <ul className="hidden md:flex justify-between gap-4">
              <li className="text-white  my-auto hover:text-yellow-400 hover:border-b-2">
                <a href="/">Skills</a>
              </li>
              <li className="text-white  my-auto hover:text-yellow-400 hover:border-b-2">
                <a href="/">Projects</a>
              </li>
              <li className="text-white  my-auto hover:text-yellow-400 hover:border-b-2">
                <a href="/">Blog</a>
              </li>
              <li className="text-white  my-auto hover:text-yellow-400 hover:border-b-2">
                <a href="/">Contact</a>
              </li>
              <li className="text-white">
                <button
                  className="bg-yellow-400 text-gray-900 p-2 rounded"
                  onClick={() => setTimer(0)}
                >
                  Restart
                </button>
              </li>
            </ul>
            <button className="md:hidden text-white fill-current w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
                fill="inherit"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </button>
          </nav>
        </header>
      )}
    </div>
  );
};
