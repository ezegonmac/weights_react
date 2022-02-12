import "./Navbar.css"
import NavbarLink from "./NavbarLink.js"
import NavbarLogo from "./NavbarLogo.js"

const Navbar = () => {
	return (
		<nav className="navbar">
			<NavbarLogo />
			<div className="navbar__nav">
				<NavbarLink text="NEW WEIGHT" url="/new-weight" />
				<NavbarLink text="TABLE" url="/table" />
				<NavbarLink text="GRAPH" url="/graph" />
			</div>
		</nav>
	)
}

export default Navbar
