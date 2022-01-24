import "./NavbarLink.css"

const NavbarLink = ({ text, url }) => {
	return (
		<a className="navbar__link" href={url}>
			<h3 className="link__text">{text}</h3>
			<div className="link__underline" />
		</a>
	)
}

export default NavbarLink
