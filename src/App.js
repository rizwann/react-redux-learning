import { useDispatch, useSelector } from "react-redux";
import User from "./components/User/User";
import { decrementValue, incrementValue } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleIncrement = () => {
    dispatch(incrementValue());
  };
  const handleDecrement = () => {
    dispatch(decrementValue());
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleIncrement}> Increment</button>
      <button onClick={handleDecrement}> Decrement</button>
      <User />
    </div>
  );
}

export default App;
