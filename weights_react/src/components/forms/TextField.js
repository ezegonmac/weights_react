import { useField } from 'formik'
import FormError from './FormError.js'

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="field text-field">
            <label>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default TextField