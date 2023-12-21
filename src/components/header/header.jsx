import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return(
    <header class="header">
            <div class="header_container">
                    <Link to="/" class="header_logo">Saul Design</Link>
                    <div className="ull">
                        <ul class="menu_list">
                            <li><Link to="/" class="menu_link">Home</Link></li>
                            <li><Link to="/aboutMe" class="menu_link">About</Link></li>
                            <li><Link to="/contact" class="menu_link">Contact</Link></li>
                        </ul>
                    </div>
            </div>
    </header>
    )
}

export default Header