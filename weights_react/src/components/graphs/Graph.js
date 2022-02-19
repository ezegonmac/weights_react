import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';
import CustomTooltip from './CustomTooltip.js';
import { getTicks, getTickFormatter, fillTicksData } from '../../utils/TicksUtils.js'
import "./Graphs.css"

const getAxisUnit = (data, startDate, endDate) => {
    const diffYears = endDate.getFullYear() - startDate.getFullYear()
    const diffMonths = endDate.getMonth() - startDate.getMonth()

    if (diffYears >= 1 && data.length > 30) {
        return "years"
    }
    else if (diffYears >= 2) {
        return "years"
    }
    else if (diffMonths >= 5) {
        return "months"
    }
    else {
        return "days"
    }
}

const Graph = ({ data, startDate, endDate, axisUnit, hasMean, hasDirection }) => {
    // Styles
    const gridStroke = "rgba(192,192,192,5%)"
    const lineStroke = "#33589a"
    const axisStroke = "#c0c0c0"
    const lineFill = "#ffffff"

    // SAMPLE DATA
    const datesWeights0 = [{ id: 1, date: "2020-10-20", weight: 67.7 }, { id: 2, date: "2020-10-21", weight: 67.8 }, { id: 3, date: "2020-10-22", weight: 68.0 }, { id: 3, date: "2020-10-24", weight: 69.0 }, { id: 4, date: "2020-10-25", weight: 70 }, { id: 5, date: "2020-11-26", weight: 75 }]
    const datesWeights1 = [{ id: 1, date: "2020-10-20", weight: 67.7 }, { id: 2, date: "2020-10-21", weight: 67.8 }, { id: 3, date: "2020-10-22", weight: 68.0 }, { id: 3, date: "2020-10-24", weight: 69.0 }, { id: 4, date: "2020-10-25", weight: 70 }, { id: 5, date: "2020-11-26", weight: 75 }, { id: 6, date: "2020-12-28", weight: 65 }, { id: 7, date: "2021-1-1", weight: 64 }]
    const datesWeights2 = [{ id: 1, date: "2020-10-20", weight: 67.7 }, { id: 2, date: "2020-10-21", weight: 67.8 }, { id: 3, date: "2020-10-22", weight: 68.0 }, { id: 3, date: "2020-10-24", weight: 69.0 }, { id: 4, date: "2020-10-25", weight: 70 }, { id: 5, date: "2020-11-26", weight: 75 }, { id: 6, date: "2020-12-28", weight: 65 }, { id: 7, date: "2021-1-1", weight: 64 }, { id: 8, date: "2021-2-10", weight: 69 }, { id: 9, date: "2022-1-4", weight: 70 }]
    const datesWeights3 = [{ id: 1, date: "2020-10-20", weight: 67.7 }, { id: 2, date: "2020-10-21", weight: 67.8 }, { id: 3, date: "2020-10-22", weight: 68.0 }, { id: 3, date: "2020-10-24", weight: 69.0 }, { id: 4, date: "2020-10-25", weight: 70 }, { id: 5, date: "2020-11-26", weight: 75 }, { id: 6, date: "2020-12-28", weight: 65 }, { id: 7, date: "2021-1-1", weight: 64 }, { id: 8, date: "2021-2-2", weight: 65 }]
    data = datesWeights3.map((x) => { return { id: x.id, date: new Date(x.date).getTime(), weight: x.weight } })

    startDate = startDate || new Date(data[0].date)
    endDate = endDate || new Date(data[data.length - 1].date)

    axisUnit = null

    axisUnit = axisUnit || getAxisUnit(data, startDate, endDate)

    const domain = [() => startDate.getTime(), () => endDate.getTime()];
    const ticks = getTicks(startDate, endDate, 5);
    const filledData = fillTicksData(ticks, data);

    return (
        <div style={{ width: "100%", height: "350px" }}>
            <ResponsiveContainer width="100%">
                <LineChart
                    width="100%"
                    height={600}
                    data={data}>
                    <CartesianGrid stroke={gridStroke} />
                    <XAxis
                        dataKey="date"
                        hasTick
                        data={filledData}
                        ticks={getTicks(startDate, endDate, 8, axisUnit)}
                        tickFormatter={getTickFormatter(axisUnit)}
                        scale="time"
                        type="number"
                        domain={domain}
                        stroke={axisStroke}
                        padding={{ left: 30, right: 30 }} />
                    <YAxis
                        interval="preserveStartEnd"
                        unit="Kg"
                        stroke={axisStroke}
                        domain={['dataMin - 5', 'dataMax + 5']} />
                    <Line
                        connectNulls
                        type="monotone"
                        dataKey="weight"
                        stroke={lineStroke}
                        strokeWidth="2"
                        fill={lineFill} />
                    <Tooltip content={<CustomTooltip />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph