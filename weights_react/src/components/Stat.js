import './Stat.css'

const Stat = ({ label, value, primary, secondary, tertiary }) => {
    return (
        <div className={`stat ${primary ? "stat--primary" : null} ${secondary ? "stat--secondary" : null} ${tertiary ? "stat--tertiary" : null}`} >
            <p className="stat__label">{`${label}: `}</p>
            <p className="stat__value">{`${value} kg`}</p>
        </div>
    )
}

export default Stat