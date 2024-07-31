import './App.css'
import { useState } from 'react';

function App() {

  // let counter = 5;
  var [counter, setCounter] = useState(15)
  const addValue = () => {
    setCounter(counter + 1)
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
      <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
