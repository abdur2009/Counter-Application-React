import { use, useState } from 'react'


import './App.css'

function App() {

let [counter, setCounter] = useState(0)
//  let counter = 0
 const addValue = () => {
   
   counter = counter + 1
   console.log('clicked', counter)
  setCounter(counter)
  }
  const subtractValue = () => {
    counter = counter - 1
    console.log('clicked', counter)
    setCounter(counter)
    }
  const resetValue = () => {
    counter = 0
    console.log('clicked', counter)
    setCounter(counter)
    }

  return (
    <>
      <h1>Basic Counter Made using React</h1>
      <h1>~Made by Abdur Rahman~</h1>
      <h2>Counter value : {counter}</h2>
      <div>

      <button
      onClick={addValue} class="neon-button"
      >Add Value</button>
      
      <button
      onClick={subtractValue} class="neon-button"
      >Subtract  Value</button>
      
      <button 
      onClick={resetValue} class="neon-button"
      >Reset Value</button>
     
      </div>
    </>
  )
}

export default App
