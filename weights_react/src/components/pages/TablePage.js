import Container from '../Container.js'
import './TablePage.css'
import { Formik, Form } from 'formik'
import SelectField from '../forms/SelectField.js'
import DateField from '../forms/DateField.js'
import * as Yup from 'yup'

const TablePage = () => {
    const options = ['hola', 'adios']
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
                    <Form>
                        <SelectField name="order" label="Order by" >
                            {options.map(option =>
                                <option key={option} value={option.toLowerCase()}>
                                    {option}
                                </option>)}
                        </SelectField>
                        <DateField name="start" label="Start" />
                        <DateField name="end" label="End" />
                        <button type="submit">Search</button>
                    </Form>
                </Formik>
            </Container>
            <Container className="container--table container--main">

            </Container>
        </div>
    )
}

export default TablePage