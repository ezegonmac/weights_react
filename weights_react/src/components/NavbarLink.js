import "./NavbarLink.css"
import { NavLink } from "react-router-dom"

const NavbarLink = ({ text, url }) => {
	return (
		<NavLink end
			to={url}
			className="navbar__link">
			<h3 className="link__text">{text}</h3>
			<div className="link__underline" />
		</NavLink>
	)
}

export default NavbarLink
