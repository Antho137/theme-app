import { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Home from "./components/Home";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-slate-300 dark:bg-black ${darkMode && "dark"}`}>
      <div className="bg-white min-h-screen min-w-[320px] max-w-[768px] mx-auto font-mono dark:bg-black">
        <div className="flex justify-between items-center p-5 border-b-4">
          <h1 className="font-bold text-xl dark:text-white">Theme App</h1>
          <button
            onClick={toggleTheme}
            className="py-1 px-2 text-2xl hover:scale-105 transition-all duration-100 dark:text-white"
          >
            {darkMode ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
        <Home />
      </div>
    </div>
  );
};

export default App;
