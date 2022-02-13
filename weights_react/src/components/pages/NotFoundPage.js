import './NotFoundPage.css'
import Container from '../Container'

const NotFoundPage = () => {
    return (
        <div className="content not-found">
            <Container className="container--not-found container--main">
                <h1>404 Error: </h1>
                <h2>Not found</h2>
            </Container>
        </div>
    )
}

export default NotFoundPage