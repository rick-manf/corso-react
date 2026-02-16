import "./Navbar.css"
import Link from "./Link"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link href="/">Corso React</Link>
            </div>
            <ul className="navbar-links">
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
