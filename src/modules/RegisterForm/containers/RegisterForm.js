import {withFormik} from "formik";
import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/validations/registerFormValidation";

const formikEnhancer = withFormik({
    mapPropsToValues: (props) =>{
        return {
            email : null,
            name : null,
            patronymic : null,
            surname : null,
            password : null,
            repeated_password : null,
        }
    },
    validate: (values) => {
        const errors =  validateForm(values);

        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'registerForm', // helps with React DevTools
});

export default formikEnhancer(RegisterForm);