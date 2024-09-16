import './App.css'
import { useState } from 'react';

function App() {

  // let counter = 5;
  var [counter, setCounter] = useState(5)
  const addValue = () => {
    // this will only change the value once
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // counter = 16 after increment
    
    // Using function you can update the code as many time as called
    setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // counter = 19 after increment
  
  }

  const removeValue = () => {
    setCounter(counter-1)
  }
    
    
  return (
    <>
      <h1>Hello! there</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value to {counter}</button> <br/> <br/>
      <button onClick={removeValue}>Remove Value from {counter}</button> 
      <br/> <br/>
      <h2>Footer: {counter}</h2>
    </>
  )
}

export default App
