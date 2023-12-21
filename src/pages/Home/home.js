import "./home.css"
import Picture from "../../components/img/home.svg"
import MenThree from "../../components/img/menThree.svg"
import PictureTwo from "../../components/img/стрелка2.svg"

const Home = () => {  
  return (
    <div>
      <div className="home">
        <div>
          <img src={PictureTwo} className="two"></img>
          <h1 className="uppercase">Creative ui<br/><span className="aqua"> designer</span></h1>
          <div className="buttons">
          <button>Hire me</button>
          <button className="gray">Dowland CV</button>
          
          </div>
          </div>
          <img src={Picture} className="picture"></img>
          <img src={MenThree} className="menThree"></img>
      </div>
    </div>
  )
}

export default Home