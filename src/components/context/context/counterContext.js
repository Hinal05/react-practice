import React, {useState} from "react";

const CounterContext = React.createContext();

export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter => counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter => counter - 1);
  }
  return (
    <CounterContext.Provider value={{
      counter, increaseCounter, decreaseCounter
    }}>
      {props.children}
    </CounterContext.Provider>
  )
}
export default CounterContext;