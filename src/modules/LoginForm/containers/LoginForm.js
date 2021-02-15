import {withFormik} from "formik";
import LoginForm from "../components/LoginForm";
import validateForm from "../../../utils/validations/registerFormValidation";

const formikEnhancer = withFormik({
    mapPropsToValues: (props) =>{
        return {
            email : null,
            password : null,
            remember: null
        }
    },
    validate: (values) => {
        const errors = validateForm(values);

        return errors;
    },
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'loginForm', // helps with React DevTools
});

export default formikEnhancer(LoginForm);