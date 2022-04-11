import Horses from "./components/Horses";
import Weapons from "./components/Weapons";

// TODO: 1. Carousel  2. More data  3. Headings above lists

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
