import logo from "./logo.svg";
import "./App.css";
import { incNumber, decNumber } from "./Actions/test.action";
import { useSelector, useDispatch } from "react-redux";
const App = (props) => {
  const myState = useSelector((state) => state.test);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
