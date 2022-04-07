import Horses from "./components/Horses";
import Weapons from "./components/Weapons";

function App() {
  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Horses />
      </div>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Weapons />
      </div>
    </>
  );
}

export default App;
