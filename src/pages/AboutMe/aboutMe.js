import "./aboutMe.css"
import Background from "../../components/img/Background.svg"
import Light from "../../components/img/lightbulb.svg"
import Music from "../../components/img/music.svg"
import Men from "../../components/img/men.svg"


const AboutMe = () => {  
  return (
      <div className="aboutMe">
        <div>
          <div>
          <img src={Music} className="music"></img>
          </div>
          <h1>About<span className="aqua"> me</span> <img src={Light} className="light"></img></h1>
          <p className="p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo... <a href="#">Read more</a></p>
        </div>
        <div>
          <img src={Background} className="Background"></img>
          <div>
          <img src={Men} className="men"></img>
          </div>
        </div>
      </div>
  )
}

export default AboutMe
