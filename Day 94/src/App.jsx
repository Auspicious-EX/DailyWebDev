import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Shubham")
  const [form, setform] = useState({email:"", phone:""})

  const handelclick= ()=>{

    alert("hey i am clicked")

  }

  const handelmouseover= ()=>{

    alert("hey mouse is overing")

  }

  const handelchange= (e)=>{

    // setname(e.target.value)
    setform({...form, [e.target.name]: e.target.value})
    console.log(form)
  }




  return (
    <>
      <div className="button">
        <button onClick={handelclick}>click me</button>
      </div>

      <div className="red" onMouseOver={handelmouseover}>
        i am red div
      </div>

      <input type="text" name="email" value={form.name} onChange={handelchange}/>
      <input type="text" name="phone" value={form.name} onChange={handelchange}/>
    </>
  )
}

export default App
