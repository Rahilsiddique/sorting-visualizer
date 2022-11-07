import Main from "./components/Main";
import Navbar from "./components/Navbar";
function App() {
  return (
    <main className="grid grid-rows-[repeat(10,_1fr)] bg-[#DFF6FF] w-screen h-screen">
      <Navbar />
      <Main />
    </main>
  );
}

export default App;
