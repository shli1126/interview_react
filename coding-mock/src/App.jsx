import Accordion from "./components";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
