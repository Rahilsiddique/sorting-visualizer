import { Algo, Settings } from "../context/SortingContext.types";

interface Props {
  onAlgoChange: (type: Algo) => void;
  settings: Settings;
  sort: (algoType: Algo) => void;
}

const NavButtons: React.FC<Props> = ({ onAlgoChange, settings, sort }) => (
  <div className="row-span-1 flex items-center justify-center w-5/6 max-w-4xl mx-auto gap-5">
    <div className="flex flex-wrap justify-center">
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "merge sort" && "text-[#47B5FF]"
        }`}
        onClick={() => onAlgoChange("merge sort")}
      >
        Merge Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "insertion sort" && "text-[#47B5FF]"
        }`}
        onClick={() => onAlgoChange("insertion sort")}
      >
        Insertion Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "heap sort" && "text-[#47B5FF]"
        }`}
        onClick={() => onAlgoChange("heap sort")}
      >
        Heap Sort
      </button>
      <button
        className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
          settings.algoType === "quick sort" && "text-[#47B5FF]"
        }`}
        onClick={() => onAlgoChange("quick sort")}
      >
        Quick Sort
      </button>
    </div>
    <button
      className="border-2 border-[#1363DF] px-3 py-2 rounded-lg"
      onClick={() => sort(settings.algoType)}
    >
      Sort!
    </button>
  </div>
);

export default NavButtons;
