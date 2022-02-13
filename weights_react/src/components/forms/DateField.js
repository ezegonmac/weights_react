import { useField } from 'formik'
import FormError from './FormError.js'

const DateField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="field date-field">
            <label>{label}</label>
            <input {...field} {...props} type="date" />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default DateField