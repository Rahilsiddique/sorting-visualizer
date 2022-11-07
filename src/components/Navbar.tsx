import { useContext } from "react";
import { SettingsContext } from "../context/SortingContext";
import { Algo } from "../context/SortingContext.types";
import NavButtons from "./NavButtons";

type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

const Nav = () => {
  const { sort, settings, setSettings } = useContext(SettingsContext);

  const onArrayChange: InputChangeHandler = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, arrayLen: +e.target.value * 5 }));
  };

  const onDelayChange: InputChangeHandler = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, delay: +e.target.value }));
  };

  const onAlgoChange = (type: Algo) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, algoType: type }));
  };

  return (
    // <nav className="row-span-3 sm:row-span-2 w-screen bg-[#06283D] text-[#DFF6FF] grid grid-rows-2 pb-4">
    <nav className="flex bg-[#06283D] text-[#DFF6FF] py-2 lg:flex-row flex-col">
      <NavButtons onAlgoChange={onAlgoChange} settings={settings} sort={sort} />
      <div className="flex flex-col w-full justify-between">
        <div className="flex w-full justify-between">
          <label htmlFor="items_amount">
            Array Length: {settings.arrayLen}
          </label>
          <input
            type="range"
            name="items_amount"
            id="items_amount"
            className="w-full max-w-2xl"
            defaultValue={25}
            min={1}
            onChange={onArrayChange}
          />
        </div>
        <div className="flex w-full justify-between">
          <label htmlFor="delay">Delay: {settings.delay}</label>
          <input
            type="range"
            name="delay"
            id="delay"
            className="w-full max-w-2xl z-10"
            min={1}
            defaultValue={5}
            onChange={onDelayChange}
          />
        </div>
      </div>
    </nav>
    // </nav>
  );
};

export default Nav;
