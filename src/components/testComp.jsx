import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Container, FormGroup, Button, Col, InputGroup, Image, Card, Row } from 'react-bootstrap';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Avatar from 'react-avatar-edit'
import { createUser } from '../services/userService';
import * as Yup from 'yup';
import '../css/admin/createUser.css'


class TestComp extends React.Component {
    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    render() {
        const rolesOptions = [
            { value: 'admin', label: 'مدیر سیستم' },
            { value: 'post_pishkhan_user', label: 'کاربر پست و پیشخوان' },
            { value: 'village_fix_wired_user', label: 'کاربر تلفن ثابت روستایی' },
            { value: 'village_fix_wireless_user', label: 'کاربر تلفن بی سیم روستایی' },
            { value: 'village_mobile_user', label: 'کاربر موبایل روستایی' }
        ]

        const animatedComponents = makeAnimated();

        // const customStyles = {
        //     control: (provided, state) => ({
        //         ...provided,
        //         boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(91, 192, 222, 0.35)" : 0,
        //         // borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",
        //         // "&:hover": {
        //         //     borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
        //         // },
        //         borderColor: roles.isValid
        //     }),
        // }

        return (
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    preview: null,
                    src: null,
                    roles: null
                }}

                validationSchema={Yup.object().shape({
                    firstName: Yup
                        .string()
                        .required('First Name is required'),
                    lastName: Yup
                        .string()
                        .required('Last Name is required'),
                    email: Yup
                        .string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup
                        .string()
                        .min(6, 'Password must be at least 6 characters')
                        .required('Password is required'),
                    confirmPassword: Yup
                        .string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')
                })}

                onSubmit={fields => {
                    alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                }}

                render={({ errors, status, touched }) => (
                    <Card style={{ width: '30rem' }} className="shadow mx-auto" border="success">
                        <Form>
                            <Card.Header>
                                <Row>
                                    <Form.Group as={Col} controlId="uploadAvatar">
                                        <Form.Label>آواتار کاربر</Form.Label>
                                        <Form.Control
                                            as={Avatar}
                                            width={150}
                                            height={100}
                                            onCrop={this.onCrop}
                                            onClose={this.onClose}
                                            src={status.src}
                                            label="انتخاب عکس">
                                        </Form.Control>
                                    </Form.Group>
                                    <Col className="text-center">
                                        <span >
                                            <Image 
                                                className="m-4 flo" 
                                                src={status.preview} 
                                                id="preview" 
                                                />
                                        </span>
                                    </Col>
                                </Row>
                            </Card.Header>

                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Register</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </Form>
                    </Card>
                )}
            />
        )
    }
}

export default TestComp; 