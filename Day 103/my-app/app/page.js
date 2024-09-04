// "use client"
import Navbar from "@/components/Navbar"
import fs from "fs/promises"

// import { useState } from "react";

export default function Home() {
  // const [count, setCount] = useState(0)


  console.log("hello ")

  let a =  fs.readFile(".gitignore")

  a.then(e => {console.log(e.toString())})

  return (
    <div>
    <div>
      <Navbar/>
      i am component{/* count */}
    </div>
    {/* <button onClick={()=> setCount(count+1)}>click</button> */}
    </div>
  );
}
