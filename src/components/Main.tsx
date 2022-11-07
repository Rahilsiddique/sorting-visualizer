import { useContext } from "react";
import { ItemsContext, SettingsContext } from "../context/SortingContext";

const Main = () => {
  const { items } = useContext(ItemsContext);
  const { settings } = useContext(SettingsContext);

  return (
    <section className="[grid-row:2/-1] sm:[grid-row:2/-1] overflow-hidden border-black m-2 border-2">
      <div className="flex w-full h-full items-end">
        {items.map((item, idx) => (
          <div
            key={`${item}-${settings.arrayLen}-${idx}`}
            className="flex-1"
            style={{
              backgroundColor: "#1363DF",
              height: `${item / 7}%`,
              border: "1px solid #47B5FF"
            }}
            id={`${idx}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;
