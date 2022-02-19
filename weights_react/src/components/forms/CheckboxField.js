import { useField } from 'formik'
import FormError from './FormError.js'
import './Forms.css'

const CheckboxField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="form__field form__field--checkbox">
            <label className="form__label" >{label}</label>
            <input className="form__input form__input--checkbox" type="checkbox" {...field} />
            <span className="form__checkmark"></span>
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default CheckboxField