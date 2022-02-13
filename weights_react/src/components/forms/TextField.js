import { useField } from 'formik'
import FormError from './FormError.js'
import './Forms.css'

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="form__field form__field--text">
            <label className="form__label" >{label}</label>
            <input className="form__input" type="text" {...field} />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default TextField