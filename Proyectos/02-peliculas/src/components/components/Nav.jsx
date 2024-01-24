import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <header className="bg-blue-200 h-10">
        <nav>
            <ul className="flex justify-center place-items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">Usuarios</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav