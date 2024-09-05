
import {submitAction} from "@/actions/Form"



export default function Home() {

 

  return (
    <div>
      <form  >

        <div >
          <label htmlFor="name">name</label>
          <input name = "name" id = "name" className="text-black" type="text" />
        </div>
        <div>
          <label htmlFor="add"> add</label>
          <input name = "add" id = "add" className="text-black" type="text" />
        </div>
        <div>
          <button className="border-x-4">submit</button>
        </div>
      </form>
    </div>
  );
}
