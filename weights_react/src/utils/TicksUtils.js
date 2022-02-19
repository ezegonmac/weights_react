import { add, differenceInCalendarDays } from "date-fns"
import { dateFormatterDays, dateFormatterMonths, dateFormatterYears } from "./DateUtils.js"
import { differenceInMonths, differenceInYears } from 'date-fns/esm';


const fillTicksData = (_ticks, data) => {
    const ticks = [..._ticks]
    const filled = []
    let currentTick = ticks.shift()
    let lastData = null
    for (const it of data) {
        if (ticks.length && it.date > currentTick && lastData) {
            filled.push({ ...lastData, ...{ date: currentTick } })
            currentTick = ticks.shift()
        } else if (ticks.length && it.date === currentTick) {
            currentTick = ticks.shift()
        }

        filled.push(it)
        lastData = it
    }

    return filled
}

const getTicksByDays = (startDate, endDate, num) => {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    const diffDays = differenceInCalendarDays(endDate, startDate)

    let current = startDate,
        velocity = Math.round(diffDays / (num - 1))

    const ticks = [startDate.getTime()]

    for (let i = 1; i < num - 1; i++) {
        ticks.push(add(current, { days: i * velocity }).getTime())
    }

    ticks.push(endDate.getTime())
    return ticks
}

const getTicksByMonths = (startDate, endDate) => {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    startDate.setDate(1)
    endDate.setDate(1)
    const diffMonths = differenceInMonths(endDate, startDate) + 1

    let startMonth = startDate

    const ticks = [startMonth.getTime()]

    for (let i = 1; i < diffMonths + 1; i++) {
        ticks.push(add(startMonth, { months: 1 * i }).getTime())
    }

    return ticks
}

const getTicksByYears = (startDate, endDate) => {
    startDate = new Date(startDate)
    endDate = new Date(endDate)
    startDate.setDate(1)
    startDate.setMonth(0)
    endDate.setDate(1)
    endDate.setMonth(0)
    const diffYears = differenceInYears(endDate, startDate) + 1

    let startYear = startDate

    const ticks = [startYear.getTime()]

    for (let i = 1; i < diffYears + 1; i++) {
        ticks.push(add(startYear, { years: 1 * i }).getTime())
    }

    return ticks
}

const getTicks = (startDate, endDate, num, type) => {
    switch (type) {
        case "days": return getTicksByDays(startDate, endDate, num)
        case "months": return getTicksByMonths(startDate, endDate)
        case "years": return getTicksByYears(startDate, endDate)
        default: return getTicksByDays(startDate, endDate, num)
    }
}

const getTickFormatter = (type) => {
    switch (type) {
        case "days": return dateFormatterDays
        case "months": return dateFormatterMonths
        case "years": return dateFormatterYears
        default: return dateFormatterDays
    }
}

export { fillTicksData, getTicks, getTickFormatter }