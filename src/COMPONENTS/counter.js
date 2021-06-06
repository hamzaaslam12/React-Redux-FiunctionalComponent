import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseNumber, decreaseNumber } from '../REDUX/ACTIONS/counterAction'


function Counter() {

// through the dispatch we perfom actions
const dispatch = useDispatch()

// get access to initial state in counter reducer
const counter = useSelector(state => state.root.number)

const increaseHandler = () => {
          // setNumber(number+1)
          dispatch(increaseNumber())
}

const decreaseHandler = () => {
          // setNumber(number-1)
return(
          counter  > 0 ?  dispatch(decreaseNumber()) : null
)
}


  return (
    <div>
      <h3>HELLO WORLD</h3>
      <h4>{ counter }</h4>
      <button onClick={increaseHandler}>INCREASE</button>      
      <button onClick={decreaseHandler}>DECREASE</button>      
    </div>
  );
}

export default Counter;
