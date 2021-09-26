import './Navbar.scss';
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <nav>
            <div className="nav-items">
                <p><Link to="/">Accueil</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/login">Se Connecter</Link></p>
            </div>            
        </nav>
    )
}

export default Navbar;