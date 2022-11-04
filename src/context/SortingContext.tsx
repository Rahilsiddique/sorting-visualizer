import React, { useState } from "react";
import { createContext } from "vm";

interface Settings {
  algoType: "merge sort" | "inertion sort";
  arrayLen: number;
  delay: number;
}

interface props {
  children: React.ReactNode;
}

const initVals: Settings = {
  algoType: "merge sort",
  arrayLen: 25,
  delay: 15
};

interface ContextType {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
}
export const Context = React.createContext<ContextType>({
  settings: initVals
});

const SortingContext: React.FC<props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  return (
    <Context.Provider
      value={{
        settings,
        setSettings
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default SortingContext;
