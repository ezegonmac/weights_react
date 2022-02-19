import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DateField from '../forms/DateField.js'
import SelectField from '../forms/SelectField.js'
import Card from '../Card.js'
import './GraphOptions.css'
import CheckboxField from '../forms/CheckboxField.js'

const GraphOptions = () => {

    const options = ['Days', 'Months', 'Years']

    return (
        <Card className="graph__options-card">
            <Formik
                initialValues={{ dateUnit: "", startDate: "", endDate: "", mean: false, direction: false }}
                onSubmit={values => { console.log(values) }}
                validationSchema={Yup.object({
                    startDate: Yup.date(),
                    endDate: Yup.date(),
                    mean: Yup.bool(),
                    direction: Yup.bool(),
                })}>
                <Form className="graph__form">

                    <div className="graph-form__inputs">
                        <SelectField name="dateUnit" label="Date Unit" className="graph-form__input">
                            {options.map(option =>
                                <option key={option} value={option.toLowerCase()}>
                                    {option}
                                </option>)}
                        </SelectField>
                    </div>
                    <div className="graph-form__inputs">
                        <DateField name="startDate" label="Start Date" className="graph-form__input" />
                        <DateField name="endDate" label="End Date" className="graph-form__input" />
                    </div>

                    <div className="graph-form__inputs">
                        <CheckboxField name="mean" label="Mean" className="graph-form__input" />
                        <CheckboxField name="direction" label="Direction" className="graph-form__input" />
                    </div>

                </Form>
            </Formik>
        </Card>
    )
}

export default GraphOptions