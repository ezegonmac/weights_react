import { useField } from 'formik'
import FormError from './FormError.js'
import './Forms.css'

const DateField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="form__field form__field--date">
            <label className="form__label" >{label}</label>
            <input className="form__input" type="date" {...field} />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default DateField