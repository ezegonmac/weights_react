import Container from '../Container.js'
import './TablePage.css'
import '../forms/TableOptions.css'
import { Formik, Form } from 'formik'
import SelectField from '../forms/SelectField.js'
import DateField from '../forms/DateField.js'
import * as Yup from 'yup'

const TablePage = () => {
    const options = ['Date', 'Weight']
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

            </Container>
        </div>
    )
}

export default TablePage