import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import './TablePage.css'
import '../forms/TableOptions.css'
import Container from '../Container.js'
import SelectField from '../forms/SelectField.js'
import DateField from '../forms/DateField.js'
import WeightsTable from '../WeightsTable.js'

const TablePage = () => {
    const options = ['Date', 'Weight']
    const datesWeights = [{ id: 1, date: "20/10/2020", weight: 67.7 }, { id: 2, date: "21/10/2020", weight: 67.8 }, { id: 3, date: "22/10/2020", weight: 68 }, { id: 3, date: "24/10/2020", weight: 69 }, { id: 4, date: "25/10/2020", weight: 67 }]

    return (
        <div className="content table-page">
            <Container className="container--table-options">
                <Formik
                    initialValues={{ order: "", start: "", end: "" }}
                    onSubmit={values => { }}
                    validationSchema={Yup.object({
                        start: Yup.date().typeError('It must be a number'),
                        end: Yup.date().typeError('It must be a number'),
                    })}>
                    <Form className="table-options">
                        <SelectField name="order" label="Order by" className="table-options__input">
                            {options.map(option =>
                                <option key={option} value={option.toLowerCase()}>
                                    {option}
                                </option>)}
                        </SelectField>
                        <DateField name="start" label="Start" className="table-options__input" />
                        <DateField name="end" label="End" className="table-options__input" />
                        <button type="submit" className="table-options__btn">Search</button>
                    </Form>
                </Formik>
            </Container>
            <Container className="container--table container--main">
                <WeightsTable data={datesWeights} />
            </Container>
        </div>
    )
}

export default TablePage