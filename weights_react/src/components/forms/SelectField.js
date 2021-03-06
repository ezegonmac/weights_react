import { useField } from 'formik'
import FormError from './FormError.js'
import './Forms.css'

const SelectField = ({ label, children, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="form__field form__field--select">
            <label className="form__label" >{label}</label>
            <select className="form__select form__input" {...field} >
                {children}
            </select>
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default SelectField