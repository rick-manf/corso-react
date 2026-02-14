import "./Navbar.css"
import Link from "./Link"

function Navbar() {
    return (
        <ul>
            <Link></Link>
            <Link></Link>

            <Link>
                qwerty       {/** qui non verrà mandato a schermo, serviranno i props */}
            </Link>
            
            <li><a href="#">Ciao</a></li>
            <li><a href="#">Ciao</a></li>
        </ul>
    )
}

export default Navbar





{/**
    ESEMPIO DI PROPS

        -------------
        LINKS.JSX

        function Link({ children }) {
            return <a href="#"> {children} </a>
        }




    */}