import './Forms.css'

const FormError = ({ children }) => {
    return (
        <p className="form__error">{children}</p>
    )
}

export default FormError