import Container from '../Container.js'
import Graph from '../graphs/Graph.js'
import './GraphPage.css'

const GraphPage = () => {
    return (
        <div className="content graph">
            <Container className="container--graph container--main">
                <Graph />
            </Container>
            <Container className="container--graph-form">

            </Container>
        </div>
    )
}

export default GraphPage