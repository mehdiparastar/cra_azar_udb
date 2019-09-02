import React, { Component } from 'react';
import { Form, Container, FormGroup, Button, Col, InputGroup, Image, Card } from 'react-bootstrap';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
// import classNames from 'classnames';
import validator from 'validator';
import Avatar from 'react-avatar-edit'
import { createUser } from '../../services/userService';
import { toast, ToastContainer } from 'react-toastify';

class CreateUser extends Component {
    formDefaults = {
        firstname: { value: '', isValid: '', message: '', focused: false },
        lastname: { value: '', isValid: '', message: '', focused: false },
        email: { value: '', isValid: '', message: '', focused: false },
        password: { value: '', isValid: '', message: '', focused: false },
        confirmPassword: { value: '', isValid: '', message: '', focused: false },
        preview: null,
        src: null,
        roles: { value: null, isValid: '', message: '', focused: false }
    }

    state = {
        ...this.formDefaults
    };

    onChange = async e => {
        const state = {
            ...this.state,
            [e.target.id]: {
                ...this.state[e.target.id],
                value: e.target.value
            }
        }
        await this.setState(state)
        await this.formIsValid()
    }

    onSubmit = async e => {
        e.preventDefault();
        if (this.formIsValid()) {
            try {
                let rolesList = []
                this.state.roles.value.forEach(item => rolesList.push(item.value))

                const dataToSend = {
                    'firstname': this.state.firstname.value,
                    'lastname': this.state.lastname.value,
                    'email': this.state.email.value,
                    'password': this.state.password.value,
                    'roles': rolesList,
                    'preview': this.state.preview
                }
                const result = await createUser(JSON.parse(JSON.stringify(dataToSend)))
                if (result.status === 200)
                    toast.success(
                        <div
                            className='text-center rtl'
                            style={{ fontFamily: "b mitra" }}> کاربر با شناسه {result.data._id} ایجاد شد.
                        </div>
                    )
                this.setState(this.formDefaults)
            } catch (ex) {
                console.log(ex)
                if (ex.response && ex.response.status === 409)
                    toast.error(
                        <div
                            className='text-center rtl'
                            style={{ fontFamily: "b mitra" }}>این کاربر از قبل در پایگاه داده موجود می باشد
                        </div>
                    )
                else
                    toast.error(
                        <div
                            className='text-center rtl'
                            style={{ fontFamily: "b mitra" }}>خطای نا مشخص
                        </div>
                    )
            }
        }
        else {
            toast.error(
                <div
                    className='text-center rtl'
                    style={{ fontFamily: "b mitra" }}>فرم ناقص می باشد
                </div>
            )
            console.log('not validate')
            e.stopPropagation()
        }
    }

    onFocus = e => {
        const state = {
            ...this.state,
            [e.target.id]: {
                ...this.state[e.target.id],
                focused: true
            }
        }
        this.setState(state)
    }

    formIsValid = () => {
        const firstname = { ...this.state.firstname }
        const lastname = { ...this.state.lastname }
        const email = { ...this.state.email }
        const password = { ...this.state.password }
        const confirmPassword = { ...this.state.confirmPassword }
        const roles = { ...this.state.roles }

        let firstnameIsGood = false
        let lastnameIsGood = false
        let emailIsGood = false
        let passwordIsGood = false
        let confirmPasswordIsGood = false
        let rolesIsGood = false
        
        if (roles.focused) {
            if (roles.value !== null) {
                rolesIsGood = true
                roles.isValid = "#5cb85c"
            } else {
                rolesIsGood = false
                roles.isValid = "#d9534f"
            }
        }

        if (firstname.focused) {
            if (firstname.value.length < 3) {
                firstname.isValid = 'is-invalid'
                firstname.message = 'نام وارد شده صحیح نمی باشد.'
                firstnameIsGood = false
            } else {
                firstname.isValid = 'is-valid'
                firstname.message = ''
                firstnameIsGood = true
            }
            if (firstname.value.length === 0) {
                firstname.isValid = ''
                firstname.message = 'cant be empty'
                firstnameIsGood = false
            }
        }

        if (lastname.focused) {
            if (lastname.value.length < 3) {
                lastname.isValid = 'is-invalid'
                lastname.message = 'نام خانوادگی وارد شده صحیح نمی باشد.'
                lastnameIsGood = false
            } else {
                lastname.isValid = 'is-valid'
                lastname.message = ''
                lastnameIsGood = true
            }
            if (lastname.value.length === 0) {
                lastname.isValid = ''
                lastname.message = 'این فیلد نمی تواند خالی باشد.'
                lastnameIsGood = false
            }
        }

        if (email.focused) {
            if (!validator.isEmail(email.value)) {
                email.isValid = 'is-invalid'
                email.message = 'وارد کردن آدرس ایمیل صحیح الزامی می باشد.'
                emailIsGood = false
            } else {
                email.isValid = 'is-valid'
                email.message = ''
                emailIsGood = true
            }
            if (email.value.length === 0) {
                email.isValid = ''
                email.message = 'این فیلد نمی تواند خالی باشد.'
                emailIsGood = false
            }
        }

        if (password.focused) {
            if ((password.value.length > 12 || password.value.length < 6)) {
                password.isValid = 'is-invalid'
                password.message = 'طول پسورد ورودی بایستی بین 6 تا 12 کاراکتر باشد.'
                passwordIsGood = false
            } else {
                password.isValid = 'is-valid'
                password.message = ''
                passwordIsGood = true
            }
            if (password.value.length === 0) {
                password.isValid = ''
                password.message = 'این فیلد نمی تواند خالی باشد.'
                passwordIsGood = false
            }
        }

        if (confirmPassword.focused) {
            if ((password.value !== confirmPassword.value)) {
                confirmPassword.isValid = 'is-invalid'
                confirmPassword.message = 'پسورد تطابق ندارد.'
                confirmPasswordIsGood = false
            } else {
                confirmPassword.isValid = 'is-valid'
                confirmPassword.message = ''
                confirmPasswordIsGood = true
            }
            if (confirmPassword.value.length === 0 && confirmPassword.focused) {
                confirmPassword.isValid = ''
                confirmPassword.message = 'این فیلد نمی تواند خالی باشد.'
                confirmPasswordIsGood = false
            }
        }

        this.setState({
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            roles
        })

        return firstnameIsGood && lastnameIsGood && emailIsGood && passwordIsGood && confirmPasswordIsGood && rolesIsGood
    }

    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    render() {
        const { firstname, lastname, email, password, confirmPassword, roles } = this.state

        const rolesOptions = [
            { value: 'admin', label: 'مدیر سیستم' },
            { value: 'post_pishkhan_user', label: 'کاربر پست و پیشخوان' },
            { value: 'village_fix_wired_user', label: 'کاربر تلفن ثابت روستایی' },
            { value: 'village_fix_wireless_user', label: 'کاربر تلفن بی سیم روستایی' },
            { value: 'village_mobile_user', label: 'کاربر موبایل روستایی' }
        ]

        const animatedComponents = makeAnimated();

        const customStyles = {
            control: (provided, state) => ({
                ...provided,
                boxShadow: state.isFocused ? "0 0 0 0.2rem rgba(91, 192, 222, 0.35)" : 0,
                // borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA",
                // "&:hover": {
                //     borderColor: state.isFocused ? "#D0EAE2" : "#CED4DA"
                // },
                borderColor: roles.isValid
            }),

        }
        return (
            <div className="create-user">
                <ToastContainer />
                <Container className="rtl mt-5" style={{ fontFamily: "yekan" }}>
                    <Card style={{ width: '30rem' }} className="shadow mx-auto" border="success">
                        <Form
                            noValidate
                            onSubmit={this.onSubmit}
                        >
                            <Card.Header>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="uploadAvatar">
                                        <Form.Label>آواتار کاربر</Form.Label>
                                        <Form.Control
                                            as={Avatar}
                                            width={150}
                                            height={100}
                                            onCrop={this.onCrop}
                                            onClose={this.onClose}
                                            src={this.state.src}
                                            label="انتخاب عکس">
                                        </Form.Control>
                                    </Form.Group>
                                    <Col className="text-center">
                                        <span >
                                            <Image className="m-4 flo" src={this.state.preview} id="preview" />
                                        </span>
                                    </Col>
                                </Form.Row>
                            </Card.Header>
                            <Card.Body>
                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>نام</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            placeholder="نام"
                                            aria-describedby="firstname"
                                            value={firstname.value}
                                            className={firstname.isValid}
                                            onChange={this.onChange}
                                            onFocus={this.onFocus} />
                                        <Form.Text className="text-warning"><small>{firstname.message}</small></Form.Text>
                                    </FormGroup>

                                    <FormGroup as={Col}>
                                        <Form.Label>نام خانوادگی</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder="نام خانوادگی"
                                            aria-describedby="lastname"
                                            value={lastname.value}
                                            className={lastname.isValid}
                                            onChange={this.onChange}
                                            onFocus={this.onFocus} />
                                        <Form.Text className="text-warning"><small>{lastname.message}</small></Form.Text>
                                    </FormGroup>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>پست الکترونیکی</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="email"><span className="fa fa-envelope m-1"></span></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                required
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="آدرس پست الکترونیکی خود را وارد کنید."
                                                aria-describedby="email"
                                                value={email.value}
                                                className={email.isValid}
                                                onChange={this.onChange}
                                                onFocus={this.onFocus} />
                                        </InputGroup>
                                        <Form.Text className="text-warning"><small>{email.message}</small></Form.Text>
                                    </FormGroup>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col}>
                                        <Form.Label>رمز عبور</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="password"><span className="fa fa-key"></span></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                required
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="رمز عبور مورد نظر را وارد نمایید"
                                                aria-describedby="password"
                                                value={password.value}
                                                className={password.isValid}
                                                onChange={this.onChange}
                                                onFocus={this.onFocus} />
                                        </InputGroup>
                                        <Form.Text className="text-warning"><small>{password.message}</small></Form.Text>
                                    </FormGroup>

                                    <FormGroup as={Col}>
                                        <Form.Label>تکرار رمز عبور</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="repeatPassword"><span className="fa fa-key"></span></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                required
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                placeholder="رمز عبور مورد نظر را تکرار نمایید"
                                                aria-describedby="confirmPassword"
                                                value={confirmPassword.value}
                                                className={confirmPassword.isValid}
                                                onChange={this.onChange}
                                                onFocus={this.onFocus} />
                                        </InputGroup>
                                        <Form.Text className="text-warning"><small>{confirmPassword.message}</small></Form.Text>
                                    </FormGroup>
                                </Form.Row>

                                <hr className="bg-warning" />

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formRoles">
                                        <Form.Label>نقش کاربر در سیستم</Form.Label>
                                        <Select
                                            isMulti
                                            isSearchable
                                            components={animatedComponents}
                                            value={roles.value}
                                            inputId="roles"
                                            className={roles.isValid}
                                            options={rolesOptions}
                                            onFocus={this.onFocus}
                                            styles={customStyles}
                                            // onChange={this.onChange}
                                            onChange={async e => {
                                                await this.setState({ ...this.state, roles: { ...this.state.roles, value: e } });
                                                await this.formIsValid()
                                            }} />
                                        <Form.Text className="text-muted">امکان انتخاب چندین مورد امکان پذیر است.</Form.Text>
                                    </Form.Group>
                                </Form.Row>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant='success' type='submit'>ثبت نام</Button>
                            </Card.Footer>
                        </Form>
                    </Card>
                </Container>
            </div >
        );
    }
}

export default CreateUser;