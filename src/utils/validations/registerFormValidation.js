const validateForm = (values) => {
    let errors = {};
    const keys = Object.keys(values);
    // debugger
    keys.forEach(key => {
        const value = values[key] || null;

        switch (key) {
            case "email":
                if (!value) {
                    errors.email = 'Field e-mail is required';
                } else if (!(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm).test(value)) {
                    errors.email = 'Field e-mail must has a full form';
                }
                break;
            case "name":
            case "patronymic":
            case "surname":
                if (!value) {
                    errors[key] = `Field ${key} is required`;
                } else if (!(/^[a-z]+$/i).test(value)) {
                    errors[key] = `Field ${key} contains letters`;
                }
                break;
            case "password":
                if (!value) {
                    errors.password = 'Field password is required';
                } else if (!(/^[a-z1-9]{6,16}$/i).test(value)) {
                    errors.password = 'Field password has length from 6 to 16';
                }
                break;
            case "repeated_password":
                if (!values.repeated_password) {
                    errors.repeated_password = ' ';
                } else if (values.repeated_password && values.repeated_password !== values.password) {
                    errors.repeated_password = 'Passwords must be equal';
                }
                break;
            default:
                break;
        }
    });

    return errors;
};

export default validateForm;