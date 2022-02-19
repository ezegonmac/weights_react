import { Line } from "recharts"

const Mean = ({ data, startDate, endDate, ...props }) => {
    // STYLES
    const lineStroke = "#ffe500"

    const mean = data.map(data => data.weight).reduce((val, acum) => acum + val) / data.length

    const line = [{ date: startDate, weight: mean }, { date: endDate, weight: mean }]

    return (
        <Line
            name="mean"
            data={line}
            dataKey="weight"
            type="linear"
            stroke={lineStroke}
            dot={false}
            activeDot={false}
            strokeWidth={0.5}
            strokeDashArray="3 1"
        />
    )
}

export default Mean