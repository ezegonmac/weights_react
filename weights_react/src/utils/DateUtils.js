import { format } from "date-fns"

const dateFormatterDays = date => {
    return format(new Date(date), "dd-MMM-yy")
}

const dateFormatterMonths = date => {
    return format(new Date(date), "MMMM")
}

const dateFormatterYears = date => {
    return format(new Date(date), "yyyy")
}

export { dateFormatterDays, dateFormatterMonths, dateFormatterYears }