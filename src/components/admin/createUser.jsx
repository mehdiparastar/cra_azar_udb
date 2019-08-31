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
        roles: [],
        preview: null,
        src: null,
        rolesSelectedOption: null
    }

    state = {
        ...this.formDefaults
    };

    onChange = async e => {
        const state = {
            ...this.state,
            [e.target.name]: {
                ...this.state[e.target.name],
                value: e.target.value
            }
        }
        await this.setState(state)
        await this.formIsValid()
    }

    onSubmit = async e => {
        e.preventDefault();
        if (this.formIsValid()) {
            // console.log('validate', this.state)
            try {
                let rolesList = []
                this.state.rolesSelectedOption.forEach(item=>rolesList.push(item.value))
                
                const dataToSend = {
                    'firstname': this.state.firstname.value,
                    'lastname': this.state.lastname.value,
                    'email': this.state.email.value,
                    'password': this.state.password.value,
                    'roles': rolesList,
                    'preview': this.state.preview
                }
                const { data } = await createUser(JSON.parse(JSON.stringify(dataToSend)))
                console.log('data', data)
                // window.location.replace('/admin')
            } catch (ex) {
                toast.error(<div className='text-center' style={{ fontFamily: "b mitra" }}> ایمیل و یا پسورد اشتباه است</div>)
                console.log('ex' + ex)
            }
        }
        else {
            console.log('not validate')
            e.stopPropagation()
        }
    }

    onFocus = e => {
        const state = {
            ...this.state,
            [e.target.name]: {
                ...this.state[e.target.name],
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
        let isGood = false

        if (firstname.focused) {
            if (firstname.value.length < 3) {
                firstname.isValid = 'is-invalid'
                firstname.message = 'نام وارد شده صحیح نمی باشد.'
                isGood = false
            } else if (firstname.value.length === 0) {
                firstname.isValid = ''
                firstname.message = 'cant be empty'
                isGood = false
            } else {
                firstname.isValid = 'is-valid'
                firstname.message = ''
                isGood = true
            }
        }

        if (lastname.focused) {
            if (lastname.value.length < 3) {
                lastname.isValid = 'is-invalid'
                lastname.message = 'نام خانوادگی وارد شده صحیح نمی باشد.'
                isGood = false
            } else if (lastname.value.length === 0) {
                lastname.isValid = ''
                lastname.message = 'این فیلد نمی تواند خالی باشد.'
                isGood = false
            } else {
                lastname.isValid = 'is-valid'
                lastname.message = ''
                isGood = true
            }
        }

        if (email.focused) {
            if (!validator.isEmail(email.value)) {
                email.isValid = 'is-invalid'
                email.message = 'وارد کردن آدرس ایمیل صحیح الزامی می باشد.'
                isGood = false
            } else if (email.value.length === 0) {
                email.isValid = ''
                email.message = 'این فیلد نمی تواند خالی باشد.'
                isGood = false
            } else {
                email.isValid = 'is-valid'
                email.message = ''
                isGood = true
            }
        }

        if (password.focused) {
            if ((password.value.length > 12 || password.value.length < 6)) {
                password.isValid = 'is-invalid'
                password.message = 'طول پسورد ورودی بایستی بین 6 تا 12 کاراکتر باشد.'
                isGood = false
            } else if (password.value.length === 0) {
                password.isValid = ''
                password.message = 'این فیلد نمی تواند خالی باشد.'
                isGood = false
            } else {
                password.isValid = 'is-valid'
                password.message = ''
                isGood = true
            }
        }

        if (confirmPassword.focused) {
            if ((password.value !== confirmPassword.value)) {
                confirmPassword.isValid = 'is-invalid'
                confirmPassword.message = 'پسورد تطابق ندارد.'
                isGood = false
            } else if (confirmPassword.value.length === 0 && confirmPassword.focused) {
                confirmPassword.isValid = ''
                confirmPassword.message = 'این فیلد نمی تواند خالی باشد.'
                isGood = false
            } else {
                confirmPassword.isValid = 'is-valid'
                confirmPassword.message = ''
                isGood = true
            }
        }

        this.setState({
            firstname,
            lastname,
            email,
            password,
            confirmPassword
        })

        return isGood
    }

    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    render() {
        const { firstname, lastname, email, password, confirmPassword, rolesSelectedOption } = this.state

        const rolesOptions = [
            { value: 'admin', label: 'مدیر سیستم' },
            { value: 'post_pishkhan_user', label: 'کاربر پست و پیشخوان' },
            { value: 'village_fix_wired_user', label: 'کاربر تلفن ثابت روستایی' },
            { value: 'village_fix_wireless_user', label: 'کاربر تلفن بی سیم روستایی' },
            { value: 'village_mobile_user', label: 'کاربر موبایل روستایی' }
        ]

        const animatedComponents = makeAnimated();

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
                                            value={rolesSelectedOption}
                                            options={rolesOptions}
                                            onChange={rolesSelectedOption => {
                                                this.setState({ rolesSelectedOption });
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








// class CreateUser extends Component {
//     formDefaults = {
//         email: { value: '', isValid: '', message: '', focused: false },
//         password: { value: '', isValid: '', message: '', focused: false },
//         confirmPassword: { value: '', isValid: '', message: '', focused: false }
//     }

//     state = {
//         ...this.formDefaults
//     };

//     onChange = async e => {
//         const state = {
//             ...this.state,
//             [e.target.name]: {
//                 ...this.state[e.target.name],
//                 value: e.target.value
//             }
//         }
//         await this.setState(state)
//         await this.formIsValid()
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         if (this.formIsValid())
//             console.log('validate')
//         else
//             console.log('not validate')
//     }

//     onFocus = e => {
//         const state = {
//             ...this.state,
//             [e.target.name]: {
//                 ...this.state[e.target.name],
//                 focused: true
//             }
//         }
//         this.setState(state)
//     }

//     formIsValid = () => {
//         const email = { ...this.state.email }
//         const password = { ...this.state.password }
//         const confirmPassword = { ...this.state.confirmPassword }
//         let isGood = false

//         if (email.focused) {
//             if (!validator.isEmail(email.value)) {
//                 email.isValid = 'is-invalid'
//                 email.message = 'Not a valid Email address'
//                 isGood = false
//             } else if (email.value.length === 0) {
//                 email.isValid = ''
//                 email.message = 'cant be empty'
//                 isGood = false
//             } else {
//                 email.isValid = 'is-valid'
//                 email.message = ''
//                 isGood = true
//             }
//         }

//         if (password.focused) {
//             if ((password.value.length > 12 || password.value.length < 6)) {
//                 password.isValid = 'is-invalid'
//                 password.message = 'password length be 6-12'
//                 isGood = false
//             } else if (password.value.length === 0) {
//                 password.isValid = ''
//                 password.message = 'cant be empty'
//                 isGood = false
//             } else {
//                 password.isValid = 'is-valid'
//                 password.message = ''
//                 isGood = true
//             }
//         }

//         if (confirmPassword.focused) {
//             if ((password.value !== confirmPassword.value)) {
//                 confirmPassword.isValid = 'is-invalid'
//                 confirmPassword.message = 'not matching passwords'
//                 isGood = false
//             } else if (confirmPassword.value.length === 0 && confirmPassword.focused) {
//                 confirmPassword.isValid = ''
//                 confirmPassword.message = 'cant be empty'
//                 isGood = false
//             } else {
//                 confirmPassword.isValid = 'is-valid'
//                 confirmPassword.message = ''
//                 isGood = true
//             }
//         }

//         this.setState({
//             email,
//             password,
//             confirmPassword
//         })

//         return isGood
//     }

//     render() {
//         const { email, password, confirmPassword } = this.state

//         return (
//             <div className="m-2 p-2">
//                 <Form
//                     onSubmit={this.onSubmit}>
//                     <Form.Group controlId="email">
//                         <Form.Label>email</Form.Label>
//                         <Form.Control
//                             className={email.isValid}
//                             required
//                             type="email"
//                             name="email"
//                             placeholder="enter email"
//                             aria-describedby="email"
//                             onChange={this.onChange}
//                             onClick={this.onClick}
//                             onFocus={this.onFocus}
//                             value={email.value} />
//                         <Form.Text className="text-warning"><small>{email.message}</small></Form.Text>
//                     </Form.Group>

//                     <Form.Group controlId="password" >
//                         <Form.Label>password</Form.Label>
//                         <Form.Control
//                             className={password.isValid}
//                             required
//                             type="password"
//                             name="password"
//                             placeholder="enter password"
//                             aria-describedby="password"
//                             onChange={this.onChange}
//                             onFocus={this.onFocus}
//                             value={password.value} />
//                         <Form.Text className="text-warning"><small>{password.message}</small></Form.Text>
//                     </Form.Group>

//                     <Form.Group controlId="confirmPassword">
//                         <Form.Label>confirm password</Form.Label>
//                         <Form.Control
//                             className={confirmPassword.isValid}
//                             required
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="confirm password"
//                             aria-describedby="confirmPassword"
//                             onChange={this.onChange}
//                             onFocus={this.onFocus}
//                             value={confirmPassword.value} />
//                         <Form.Text className="text-warning"><small>{confirmPassword.message}</small></Form.Text>
//                     </Form.Group>

//                     <Button variant='success' type='submit'>Register</Button>
//                 </Form>
//             </div >
//         );
//     }
// }

// export default CreateUser;


// import React, { Component } from 'react';
// import { Form, ValidatedInput } from 'react-bootstrap-validation'
// import userAvatar from '../../images/man.png' https://www.npmjs.com/package/react-bootstrap-validation