
import "./contact.css"
import Keybord from "../../components/img/keyboard.svg"
import Group from "../../components/img/menTwo.svg"
import Mail from "../../components/img/mail.svg"
import Vector from "../../components/img/vector.svg"

const Contact= () => {  
  return (
        <div className="contact">
          <div>
          <div>
          <img src={Keybord} className="keyboard"></img>
          </div>
          <img src={Vector} className="vector"></img>
          <img src={Group} className="group"></img>
          <div>
          <img src={Mail} className="mail"></img>
          </div>
          </div>
          <div>
          <h1 className="contact-h">Got a project in<br/><span className="aqua">mind?</span></h1>
          </div>
            <form className="form">
                  <div className="text">
                      <div className="name">
                        <p className="label">Your name</p>
                        <input type="text" placeholder="Name" required className="input"></input>
                      </div>
                      <div className="email">
                        <p className="label">Your email</p>
                        <input type="email" placeholder="Email" required className="input"></input>
                      </div>
                  </div>
                      <div>
                        <p className="label">Your message</p>
                        <textarea type="text" placeholder="message" required className="textarea"></textarea>
                      </div>
                <div>
                  <button className="message">Send Message</button>
                </div>
            </form>
        </div>
  )
}

export default Contact