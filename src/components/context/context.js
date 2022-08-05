import React, {useContext} from 'react';
import CounterContext, {CounterProvider} from './context/counterContext';

const Context = (props) => {
  return (
    <CounterProvider>
      <Child />
    </CounterProvider>
  )
}

const Child = (props) => {
  const {counter, increaseCounter, decreaseCounter} = useContext(CounterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </div>
  )
}

const GrandChild = (props) => {
  return (
    <GrandGrandChild />
  )
}

const GrandGrandChild = (props) => {
  return (
    <h1>BHSx</h1>
  )
}

// Step1
// const Context = (props) => {
//   return (
//     <Child msg="Message from App Component" />
//   )
// }

// const Child = (props) => {
//   return (
//     <GrandChild msg={props.msg} />
//   )
// }

// const GrandChild = (props) => {
//   return (
//     <GrandGrandChild msg={props.msg} />
//   )
// }

// const GrandGrandChild = (props) => {
//   return (
//     <h1>{props.msg}</h1>
//   )
// }

export default Context;
