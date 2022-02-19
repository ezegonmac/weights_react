import Container from '../Container.js'
import Graph from '../graphs/Graph.js'
import GraphStats from '../graphs/GraphStats.js'
import './GraphPage.css'

const GraphPage = () => {
    return (
        <div className="content graph">
            <Container className="container--graph container--main">
                <Graph />
            </Container>
            <Container className="container--graph-form">

            </Container>
            <Container className="container--graph-stats container--main">
                <GraphStats />
            </Container>
        </div>
    )
}

export default GraphPage