import { useField } from 'formik'
import FormError from './FormError.js'

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="field select-field">
            <label>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default SelectField