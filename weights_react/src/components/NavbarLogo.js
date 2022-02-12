import { NavLink } from "react-router-dom"
import "./NavbarLogo.css"

const NavbarLogo = () => {
    return (
        <NavLink className="navbar__logo" to="/">
            <img src="/images/Logo_v1.png" alt="weights" />
        </NavLink>
    )
}

export default NavbarLogo