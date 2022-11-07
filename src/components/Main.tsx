import { useContext } from "react";
import { ItemsContext, SettingsContext } from "../context/SortingContext";

const Main = () => {
  const { items } = useContext(ItemsContext);
  const { settings } = useContext(SettingsContext);

  return (
    // <section className="[grid-row:4/-1] sm:[grid-row:3/-1]">
    <section className="[grid-row:4/-1] sm:[grid-row:3/-1] overflow-hidden border-black m-2 border-2">
      <div className="flex w-full h-full ">
        {items.map((item, idx) => (
          <div
            key={`${item}-${settings.arrayLen}-${idx}`}
            className="flex-1"
            style={{
              backgroundColor: "#1363DF",
              height: `${item / 7}%`
            }}
            id={`${idx}`}
          />
        ))}
      </div>
    </section>
    // {/* </section> */}
  );
};

export default Main;
