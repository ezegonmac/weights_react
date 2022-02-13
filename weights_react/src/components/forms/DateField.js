import { useField } from 'formik'
import FormError from './FormError.js'

const DateField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="table-options__field table-options__field--date">
            <label className="table-options__label" >{label}</label>
            <input className="table-options__input" type="date" {...field} {...props} />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default DateField