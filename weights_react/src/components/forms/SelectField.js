import { useField } from 'formik'
import FormError from './FormError.js'

const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className="table-options__field table-options__field--select">
            <label className="table-options__label" >{label}</label>
            <select className="table-options__select" {...field} {...props} />
            {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
        </div>
    )
}

export default SelectField