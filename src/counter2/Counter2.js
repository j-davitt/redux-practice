
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, selectCount } from "./reducer";


function Counter2() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();



  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default Counter2;