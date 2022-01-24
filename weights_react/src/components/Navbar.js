import "./Navbar.css"
import NavbarLink from "./NavbarLink.js"

const Navbar = () => {
	return (
		<nav className="navbar">
			<a className="navbar__logo" href="/">
				<img src="/images/Logo_v1.png" alt="weights" />
			</a>
			<div className="navbar__nav">
				<NavbarLink text="NEW WEIGHT" url="/" />
				<NavbarLink text="TABLE" url="/" />
				<NavbarLink text="GRAPH" url="/" />
			</div>
		</nav>
	)
}

export default Navbar
