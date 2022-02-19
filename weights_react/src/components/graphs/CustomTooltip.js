import { dateFormatterDays } from "../../utils/DateUtils.js"

const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip__label">{`${dateFormatterDays(label)} :`}</p>
                <p className="tooltip__value">{`${payload[payload.length - 1].value} kg`}</p>
            </div>
        )
    }

    return null
}

export default CustomTooltip