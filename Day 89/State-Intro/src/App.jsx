import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <button onClick={()=> {setCount(count + 1)}}>+</button>
      <div>The count is {count}</div>
      <button onClick={()=> {setCount(count - 1)}}>-</button>
    </>
  )
}

export default App
