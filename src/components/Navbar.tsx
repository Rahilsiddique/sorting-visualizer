import { useContext } from "react";
import { Context } from "../context/SortingContext";

const Navbar = () => {
  const { settings, setSettings } = useContext(Context);
  const handleArrayLen: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    setSettings((prev) => ({ ...prev, arrayLen: +e.target.value * 5 }));
  };
  const handleArrayDelay: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    setSettings((prev) => ({ ...prev, delay: +e.target.value * 5 }));
  };
  return (
    <div className="w-full bg-slate-300 p-2">
      <div className="flex justify-center align-center">
        <button className="mx-2 py-2 px-4 bg-green-500 hover:bg-green-700 rounded-lg font-bold text-white">
          Sort
        </button>
        <select className="py-2 px-4 bg-green-500 rounded-lg ml-2 text-white border-3 border-green-300">
          <option className="bg-slate-400">merge sort</option>
          <option className="bg-slate-400">quick sort</option>
        </select>
      </div>
      <div className="flex  justify-center items-center">
        <div className="flex flex-col items-center justify-center pr-3">
          <label className="p-2">size: {settings.arrayLen}</label>
          <input type="range" onChange={handleArrayLen} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="p-2">speed: {settings.delay}</label>
          <input type="range" onChange={handleArrayDelay} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
