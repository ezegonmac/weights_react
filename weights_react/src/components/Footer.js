import Container from "./Container.js"
import Social from "./Social.js"
import "./Footer.css"

const Footer = () => {
    return (
        <Container className="footer">
            <p>Created by Ezequiel González Macho</p>
            <Social />
        </Container>
    )
}

export default Footer