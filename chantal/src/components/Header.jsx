import { Link } from "react-router-dom";
import '../styles/Header.css';

export default function Header() {

    return (
        <header>
            <h1>La table de Chantal</h1>
            <nav className="navigation">
                <div className="navMenu"><Link className = "a" to="/">Acceuil</Link></div>
                <div className="navMenu"><Link className = "a" to="/menus">Menus</Link></div>
                <div className="navMenu"><Link className = "a" to="/Boissons">Boissons</Link></div>
                <div className="navMenu"><Link className = "a" to="/Contact">Contact</Link></div>
            </nav>
        </header>
    )
}