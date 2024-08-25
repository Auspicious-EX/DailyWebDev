import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import Navbar from './component/Navbar'

function App() {
  const[value,setValue] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value + 1)}}>Click</button>
    </div>
  );
}

export default App;
