import React, { Component } from 'react';
import { Container, Form, FormGroup, Button, Col, InputGroup, Image, Card } from 'react-bootstrap';
// import userAvatar from '../../images/man.png' https://www.npmjs.com/package/react-bootstrap-validation
import Avatar from 'react-avatar-edit'
import { createUser } from '../../services/userService';
import { toast } from 'react-toastify';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatpassword: '',
            roles: [],
            preview: null,
            validated: false,
            src: null
        }
    }

    formIsValid = () => {
        const password = { ...this.state.password };
        const confirmPassword = { ...this.state.repeatpassword };
        let isGood = true;

        if (password!==confirmPassword){
            confirmPassword.message = 'رمز عبور بایستی یکسان باشند.'
            isGood=false
        }
                
        if (!isGood) {
          this.setState({
            password,
            confirmPassword,
          });
        }
        console.log(isGood)
        return isGood;
      }

    handleSubmit = async e => {
        e.preventDefault();
        const form = e.currentTarget;

        if ((form.checkValidity() === false) || (!this.formIsValid())) {
            console.log('mehdi')            
            e.stopPropagation();
        }
        else {
            console.log('parastar')
            try {
                const { data } = await createUser(JSON.parse(JSON.stringify(this.state)))
                console.log(data)
                window.location.replace('/admin')
            } catch (ex) {
                toast.error(<div className='text-center' style={{ fontFamily: "b mitra" }}> ایمیل و یا پسورد اشتباه است</div>)
                console.log('ex' + ex)
            }
        }
        this.setState({ validated: true })
    }

    onClose = () => {
        this.setState({ preview: null })
    }

    onCrop = (preview) => {
        this.setState({ preview })
    }

    render() {
        return (
            <div className="create-user">
                <Container className="rtl mt-5" style={{ fontFamily: "yekan" }}>
                    <Card style={{ width: '30rem' }} className="shadow mx-auto" border="success">
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
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
                                    <FormGroup as={Col} controlId="formFirstName">
                                        <Form.Label>نام</Form.Label>
                                        <Form.Control required type="text" placeholder="نام" onChange={e => this.setState({ firstname: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            <Form.Text className="text-muted">وارد کردن نام الزامی می باشد.</Form.Text>
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid" />
                                    </FormGroup>
                                    <FormGroup as={Col} controlId="formLastName">
                                        <Form.Label>نام خانوادگی</Form.Label>
                                        <Form.Control required type="text" placeholder="نام خانوادگی" onChange={e => this.setState({ lastname: e.target.value })} />
                                        <Form.Control.Feedback type="invalid">
                                            <Form.Text className="text-muted">وارد کردن نام خانوادگی الزامی می باشد.</Form.Text>
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid" />
                                    </FormGroup>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col} controlId="formEmail">
                                        <Form.Label>پست الکترونیکی</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="email"><span className="fa fa-envelope m-1"></span></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                aria-describedby="email"
                                                required
                                                type="email"
                                                placeholder="آدرس پست الکترونیکی خود را وارد کنید."
                                                onChange={e => this.setState({ email: e.target.value })} />
                                            <Form.Control.Feedback type="invalid">
                                                <Form.Text className="text-muted">وارد کردن آدرس ایمیل صحیح ضروری می باشد.</Form.Text>
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid" />
                                        </InputGroup>
                                    </FormGroup>
                                </Form.Row>

                                <Form.Row>
                                    <FormGroup as={Col} controlId="formPassword">
                                        <Form.Label>رمز عبور</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="password"><span className="fa fa-key"></span></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                required type="password"
                                                placeholder="رمز عبور مورد نظر را وارد نمایید"
                                                aria-describedby="password"
                                                onChange={e => this.setState({ password: e.target.value })} />
                                            <Form.Control.Feedback type="invalid">
                                                <Form.Text className="text-muted">وارد کردن رمز عبور الزامی می باشد.</Form.Text>
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid" />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup as={Col} controlId="formRepeatPassword">
                                        <Form.Label>تکرار رمز عبور</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="repeatPassword"><span className="fa fa-key"></span></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                required type="password"
                                                // placeholder="رمز عبور را تکرار نمایید"
                                                aria-describedby="repeatPassword"
                                                onChange={e => this.setState({ repeatpassword: e.target.value })} />
                                            <Form.Control.Feedback type="invalid">
                                                <Form.Text className="text-muted">وارد کردن تکرار رمز عبور الزامی می باشد.</Form.Text>
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback type="valid" />
                                        </InputGroup>
                                    </FormGroup>
                                </Form.Row>
                                <hr className="bg-warning" />
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formRoles">
                                        <Form.Label>نقش کاربر در سیستم</Form.Label>
                                        <Form.Control required as="select" multiple onChange={e => this.setState({ roles: e.target.value })}>
                                            <option value="admin">مدیر سیستم</option>
                                            <option value="post_pishkhan_user">کاربر پست و پیشخوان</option>
                                            <option value="village_fix_wired_user">کاربر تلفن ثابت روستایی</option>
                                            <option value="village_fix_wireless_user">کاربر تلفن بی سیم روستایی</option>
                                            <option value="village_mobile_user">کاربر موبایل روستایی</option>
                                        </Form.Control>
                                        <Form.Text className="text-muted">امکان انتخاب چندین مورد با نگه داشتن کلید Ctrl امکان پذیر است.</Form.Text>
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