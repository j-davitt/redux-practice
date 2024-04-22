
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, selectCount } from "./reducer";


function Counter2() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const handleAuto = () => {
    setInterval(() => {
      dispatch(increment())
    }, 1000);
  }



  return (
    <div>
      <button onClick={handleAuto}>Auto</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter2;