import Container from '../Container.js'
import './TablePage.css'
import { Formik, Form } from 'formik'
import SelectField from '../forms/SelectField.js'
import TextField from '../forms/TextField.js'

const TablePage = () => {
    const options = ['hola', 'aWdios']
    const validate = () => { return {} }
    return (
        <div className="content table-page">
            <Container className="container--table-options">
                <Formik
                    initialValues={{ order: "", start: "", end: "" }}
                    onSubmit={values => { console.log(values) }}
                    validate={validate}>
                    <Form>
                        <SelectField name="order" label="Order by" >
                            {options.map(option =>
                                <option key={option} value={option.toLowerCase()}>
                                    {option}
                                </option>)}
                        </SelectField>
                        <TextField name="start" label="Start" />
                        <TextField name="end" label="End" />
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