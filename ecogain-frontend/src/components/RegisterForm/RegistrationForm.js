// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";
// import { Form, Input, Select, Checkbox, Button } from "antd";
// const { Option } = Select;

// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24
//         },
//         sm: {
//             span: 8
//         }
//     },
//     wrapperCol: {
//         xs: {
//             span: 24
//         },
//         sm: {
//             span: 16
//         }
//     }
// };
// const tailFormItemLayout = {
//     wrapperCol: {
//         xs: {
//             span: 24,
//             offset: 0
//         },
//         sm: {
//             span: 16,
//             offset: 8
//         }
//     }
// };

const RegistrationForm = () => {
    // const [form] = Form.useForm();

    // const onFinish = (values) => {
    //     console.log("Received values of form: ", values);
    // };

    return (
        <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError> //
            {/* <Form.Item name="Full Name" label="Full Name" tooltip="What is your Full Name?" rules={[{ required: true, message: "Please input your Full Name!", whitespace: true }]}>
                <Input />
            </Form.Item> */}

            {/* <Form.Item name="Username" label="Username" tooltip="What do you want others to call you?" rules={[{ required: true, message: "Please input your username!", whitespace: true }]}>
                <Input />
            </Form.Item> */}





            <Form.Item name="confirm" label="Confirm Password" tooltip="Please re-enter your selected password." dependencies={["password"]} hasFeedback
                rules={[
                    { equired: true, message: "Please confirm your password!" },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(
                                new Error("The two passwords that you entered do not match!")
                            );
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="agreement" valuePropName="checked" rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error("Should accept agreement")) }]} {...tailFormItemLayout}>
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>


        </Form>
    );
};

ReactDOM.render(<RegistrationForm />, document.getElementById("container"));
