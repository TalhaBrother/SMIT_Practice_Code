import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { incremented, decremented } from '../counter/counterSlice'
const Counter = () => {
  const count = useSelector((state) => state.count.value)
  const dispatch = useDispatch()
  return (
    <>
        <h1>Counter</h1>
        <div>count:{count}</div>
        <button onClick={() => dispatch(decremented())}>-</button>
        <button onClick={() => dispatch(incremented())}>+</button>
    </>
  )
}

export default Counter