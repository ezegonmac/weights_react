import Card from '../Card.js'
import Stat from '../Stat.js'

const GraphStats = () => {
    return (
        <Card className="graph__stats-card">
            <div className="graph__stats-section">
                <Stat primary label="Mean" value="62.3" />
                <Stat primary label="Desviacion Tipica" value="9.4" />
            </div>
            <div className="graph__stats-section">
                <Stat secondary label="Min" value="24.1" />
                <Stat secondary label="Max" value="20.1" />
                <Stat secondary label="Max Difference" value="10.1" />
            </div>
            <div className="graph__stats-section">
                <Stat tertiary label="Weight per day" value="24.1" />
                <Stat tertiary label="Weight per week" value="20.1" />
                <Stat tertiary label="Weight per month" value="10.1" />
            </div>
        </Card>
    )
}

export default GraphStats