import React, { Component } from 'react';
import { Container, Form, FormGroup, Button, Col, InputGroup, Image, Card } from 'react-bootstrap';
// import userAvatar from '../../images/man.png'
import Avatar from 'react-avatar-edit'

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fullname: '',
                email: '',
                password: '',
                tokens: '',
                roles: '',
                useravatar: ''
            },
            validated: false,
            preview: null,
            src: null
        }
    }

    handleSubmit = event => {
        console.log('mehdi')
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log(form)
            event.preventDefault();
            event.stopPropagation();
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
                                        <Form.Control required type="text" placeholder="نام" />
                                        <Form.Control.Feedback type="invalid">
                                            <Form.Text className="text-muted">وارد کردن نام الزامی می باشد.</Form.Text>
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid" />
                                    </FormGroup>
                                    <FormGroup as={Col} controlId="formLastName">
                                        <Form.Label>نام خانوادگی</Form.Label>
                                        <Form.Control required type="text" placeholder="نام خانوادگی" />
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
                                                placeholder="آدرس پست الکترونیکی خود را وارد کنید." />
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
                                                aria-describedby="password" />
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
                                                aria-describedby="repeatPassword" />
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
                                        <Form.Control required as="select" multiple>
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