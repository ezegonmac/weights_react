import Container from '../Container.js'
import './TablePage.css'

const TablePage = () => {
    return (
        <div className="content table-page">
            <Container className="container--table-options"></Container>
            <Container className="container--table container--main"></Container>
        </div>
    )
}

export default TablePage