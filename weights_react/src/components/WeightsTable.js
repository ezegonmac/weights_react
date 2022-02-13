import "./WeightsTable.css"

const WeightsTable = ({ data }) => {
    return (
        <table className="weights-table">
            <thead>
                <tr>
                    <th>Dates</th> <th>Weights</th> <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map(x =>
                    <tr>
                        <td className="weights-table__date">{x.date}</td>
                        <td className="weights-table__weight">{x.weight}</td>
                        <td className="weights-table__edit">
                            <a href={`/edit-weight?id=${x.id}`}><img alt="edit" src="/icons/edit-buttons_icon.svg" /> </a>
                        </td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default WeightsTable