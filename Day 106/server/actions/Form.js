import fs from "fs/promises";

export const submitAction = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("shubham.txt",  `name is ${e.get("name")} and add is ${e.get("add")} `)
    console.log(a)

  }
