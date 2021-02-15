import React from 'react';
import {Form, Input} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

import {Block, ButtonCustom} from "../../../components";

const RegisterForm = (props) => {
    const success = false;
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
                <h2>Registration</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block className={"block"}>
                {!success ?
                    <Form
                        {...formItemLayout}
                        onSubmit={handleSubmit}
                        name="registerForm"
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
                            label="Your name"
                            name="name"
                            hasFeedback
                            validateStatus={!touched.name ? "" : errors.name && touched.name ? "error" : "success"}
                            help={errors.name}
                        >
                            <Input
                                id={"name"}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                        </Form.Item>

                        <Form.Item
                            label="Your patronymic"
                            name="patronymic"
                            hasFeedback
                            validateStatus={!touched.patronymic ? "" : errors.patronymic && touched.patronymic ? "error" : "success"}
                            help={errors.patronymic}
                        >
                            <Input
                                id={"patronymic"}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                        </Form.Item>

                        <Form.Item
                            label="Your surname"
                            name="surname"
                            hasFeedback
                            validateStatus={!touched.surname ? "" : errors.surname && touched.surname ? "error" : "success"}
                            help={errors.surname}
                        >
                            <Input
                                id={"surname"}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
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
                            label="Repeat password"
                            name="repeated_password"
                            hasFeedback
                            validateStatus={!touched.repeated_password ? "" : errors.repeated_password && touched.repeated_password ? "error" : "success"}
                            help={errors.repeated_password}
                        >
                            <Input.Password
                                id={"repeated_password"}
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
                            Register
                        </ButtonCustom>
                        <Link className={"auth__register-link"} to={"/login"}>Log in</Link>
                    </Form>
                    : <div className={"auth__success-block"}>
                        <InfoCircleOutlined style={{fontSize: '50px', color: '#08c'}}/>
                        <h3>Подтвердите свой аккаунт</h3>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                }
            </Block>
        </>
    )
}

export default RegisterForm;