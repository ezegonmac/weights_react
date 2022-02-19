import Card from '../Card.js'
import Stat from '../Stat.js'

const GraphStats = () => {
    return (
        <Card className="graph__stats-card">
            <div className="graph__stats-section">
                <Stat primary label="Mean" value="62.3" />
                <Stat primary label="Standard Deviation" value="9.4" />
            </div>
            <div className="graph__stats-section">
                <Stat secondary label="Min" value="22" />
                <Stat secondary label="Max" value="24.6" />
                <Stat secondary label="Max Difference" value="7.4" />
            </div>
            <div className="graph__stats-section">
                <Stat tertiary label="Weight per day" value="0.12" />
                <Stat tertiary label="Weight per week" value="0.76" />
                <Stat tertiary label="Weight per month" value="3.1" />
            </div>
        </Card>
    )
}

export default GraphStats