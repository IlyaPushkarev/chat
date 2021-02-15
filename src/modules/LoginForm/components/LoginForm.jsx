import React from 'react';
import {Checkbox, Form, Input} from "antd";
import {Link} from "react-router-dom";

import {Block, ButtonCustom} from "../../../components";

const LoginForm = (props) => {
    const {
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    // debugger
    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 8},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };

    return (
        <>
            <div className="auth__top">
                <h2>Sign in account</h2>
                <p>Please, sign in your account</p>
            </div>
            <Block className={"block"}>
                <Form
                    {...formItemLayout}
                    onSubmit={handleSubmit}
                    name="loginForm"
                >
                    <Form.Item
                        label="E-mail"
                        name="email"
                        hasFeedback
                        validateStatus={!touched.email ? "" : errors.email && touched.email ? "error" : "success"}
                        help={errors.email}
                    >
                        <Input
                            id={"email"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        hasFeedback
                        validateStatus={!touched.password ? "" : errors.password && touched.password ? "error" : "success"}
                        help={errors.password}
                    >
                        <Input.Password
                            id={"password"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        label={'Remember me'}
                        name="remember"
                        valuePropName="checked"
                    >
                        <Checkbox
                            id={"remember"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <ButtonCustom
                        className={"button__large"}
                        size={"large"}
                        type={"primary"}
                        onClick={handleSubmit}
                    >
                        This is button
                    </ButtonCustom>

                    <Link className={"auth__register-link"} to={"/register"}>Registration</Link>
                </Form>
            </Block>
        </>
    )
}

export default LoginForm;