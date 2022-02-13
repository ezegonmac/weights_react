import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Container from '../Container.js'
import DateField from '../forms/DateField.js'
import TextField from '../forms/TextField.js'
import './NewWeightPage.css'

const NewWeightPage = () => {
    return (
        <div className="content new-weight">
            <Container className="container--new-weight-form container--main">
                <Formik
                    initialValues={{ date: Date.now(), weight: 0 }}
                    onSubmit={values => { console.log(values) }}
                    validationSchema={Yup.object({
                        date: Yup.date().typeError('It must be a date').required('It is required'),
                        weight: Yup.number().required('It is required').min(0, 'Minimum value is 0'),
                    })}>
                    <Form className="new-weight__form">

                        <div className="new-weight__inputs">
                            <DateField name="date" label="Date" className="new-weight-form__input" />
                            <TextField name="weight" label="Weight" className="new-weight-form__input" />
                        </div>

                        <div className="new-weight__buttons">
                            <button type="submit" className="new-weight-form__input">Save</button>
                        </div>

                    </Form>
                </Formik>
            </Container>
        </div>
    )
}

export default NewWeightPage