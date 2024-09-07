import { Toaster } from 'react-hot-toast'
import './App.css'
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'



/* 
This App created by Shubham Prajapati 
*/
function App() {
 

  return (
    <>
     
      
        <Navbar/>
        <Manager/>
        <Footer/>
        <Toaster  />
    </>
  )
}

export default App
