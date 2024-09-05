"use client"

export default function Home() {

  const handelClick = async ()=> {
    let data = {
      name: "shubham",
      role: "CEO"
    }

    let a = await fetch("/api/add", {method: "POST", headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    let res = await a.json()
    console.log(res)
  }
  return (

    <div>
      <h1>Next.js api route demo</h1>
      <button onClick={handelClick}>click me</button>
    </div>
  );
}

