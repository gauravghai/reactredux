import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { incNumber, decNumber } from "./Actions/test.action";
// import { useSelector, useDispatch } from "react-redux";
import Card from "./Components/Card";

const App = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-forest-62260.herokuapp.com/")
      .then((response) => response.json())

      .then((data) => setMovies(data.moviesData));
  }, []);
  console.log(movies);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(movies).map((e) => {
          return (
            <Card
              thumbnail={movies[e].EventImageUrl}
              title={movies[e].EventTitle}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
