import Card from "./component/Card"
import Footer from "./component/footer"
import Navbar from "./component/Navbar"



function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        
      <Card title="Card 1" discription="dis of card 1"/>
      <Card title="Card 2" discription="dis of card 2"/>
      <Card title="Card 3" discription="dis of card 3"/>
      <Card title="Card 4" discription="dis of card 4"/>
      </div>
      <Footer/>
      
    </>
  )
}

export default App
