import React, { Component } from 'react';
import logo from '../images/CraLogoCircle.png'
import history_img from '../images/cra-img/01.jpg'
import duties_img from '../images/cra-img/02.jpg'
import bases_img from '../images/cra-img/03.jpeg'
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Card, CardDeck, Container, ListGroup, Row, Spinner } from 'react-bootstrap'
// Badge, ProgressBar, Container, Tab, Col, Breadcrumb, Jumbotron, Table 

class MainPage extends Component {

    render() {

        return (
            <div className="main_page_bg rtl" style={{ fontFamily: "b mitra" }}>

                <Navbar bg="dark" variant="dark" expand="md" sticky="top">
                    <Navbar.Brand href="#home">
                        <img id="craLogo" alt="craLogo" src={logo} width="35" height="35" className="bg-light rounded d-inline-block align-top" />
                        <span className='px-2'>اداره کل تنظیم مقررات و ارتباطات رادیویی منطقه آذر</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link href='#mainPage'>صفحه اصلی</Nav.Link>
                            <NavDropdown title="معرفی سازمان" id="nav-introduction">
                                <NavDropdown.Item href='#history'>تاریخچه سازمان</NavDropdown.Item>
                                <NavDropdown.Item href='#duties'>وظایف و اختیارات</NavDropdown.Item>
                                <NavDropdown.Item href='#bases'>اساسنامه سازمان</NavDropdown.Item>
                                <NavDropdown.Item href='#chart' disabled>چارت سازمانی</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href='#services'>خدمات سازمان</Nav.Link>
                            <Nav.Link href='#contactUs' disabled>ارتباط با ما</Nav.Link>
                        </Nav>
                        <Form inline className="ml-4">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success" >Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <Container className="mt-5">
                    <CardDeck>
                        <Card className="shadow">
                            <Card.Img variant="top" height="200px" src={history_img} />
                            <Card.Header as="h5">تاریخچه سازمان</Card.Header>
                            <Card.Body>
                                <Card.Text className='text-justify'>سازمان تنظیم مقررات و ارتباطات رادیویی در سال ۱۳۸۲ و با استناد به ماده هفت قانون وظایف و اختیارات وزارت ارتباطات و فناوری اطلاعات از تجمیع معاونت امور مخابراتی این وزارتخانه و اداره‌کل ارتباطات رادیوئی تاسیس شد. هدف از ایجاد این سازمان ایفای اختیارات حاکمیتی، نظارتی و اجرایی وزارت ارتباطات و فناوری اطلاعات در بخش تنظیم مقررات و ارتباطات رادیوئی است تا به عنوان نهاد نظارتی زمینه رقابتی شدن بازار ارائه خدمات مخابراتی و بالارفتن کیفیت خدمات ارتباطی را فراهم کند.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">دیروز نوشته شده است.</small>
                            </Card.Footer>
                        </Card>

                        <Card className="shadow">
                            <Card.Img variant="top" height="200px" src={duties_img} />
                            <Card.Header as="h5">وظایف و اختیارات سازمان</Card.Header>
                            <ListGroup className="list-group-flush p-0">
                                <ListGroup.Item>صدور پروانه فعالیت و بهره‌برداری برای ارائه هرگونه خدمات مخابراتی</ListGroup.Item>
                                <ListGroup.Item>تدوین و پیشنهاد استانداردهای ملی مربوط به ارتباطات و فناوری اطلاعات در کشور</ListGroup.Item>
                                <ListGroup.Item>تدوین و ارائه پیشنهاد درخصوص تعیین فعالیتها و بهره‌برداری غیرمجاز پستی</ListGroup.Item>
                                <ListGroup.Item>تدوین و تنظیم مقررات</ListGroup.Item>
                            </ListGroup>
                            <Card.Footer>
                                <small className="text-muted">دیروز نوشته شده است.</small>
                            </Card.Footer>
                        </Card>

                        <Card className="shadow">
                            <Card.Img variant="top" height="200px" src={bases_img} />
                            <Card.Header as="h5">اساسنامه سازمان</Card.Header>
                            <Card.Body>
                                <Card.Text className='text-justify'>هیئت وزیران در جلسات مورخ ۱۳۸۷/۷/۲۶ و ۱۳۸۸/۹/۲۲ بنا به پیشنهاد شماره ۱/۲۸۸۲۲ مورخ ۱۳۸۶/۸/۲۱ وزارت ارتباطات و فناوری اطلاعات و به استناد تبصره (۳) ماده (۷) قانون وظایف و اختیارات وزارت ارتباطات و فناوری اطلاعات - مصوب ۱۳۸۲- اساسنامه سازمان تنظیم مقررات و ارتباطات رادیوئی را تصویب نمود. </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">دیروز نوشته شده است.</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Container>

                <Navbar bg="dark" variant="dark" expand="md" fixed="bottom" className="p-0 m-0 justify-content-center">
                    <Navbar.Text>
                        <span className='fa fa-copyright m-1' />
                        <span className='copyright-text'>تمامی حقوق متعلق به اداره کل منطقه آذر می باشد.</span>
                    </Navbar.Text>
                </Navbar>

                <Container>
                    <Row className="justify-content-center mt-4 mb-5 mx-4 ">
                        <Button href="/login" variant="warning" className="shadow" size="lg" >
                            <Spinner className="mr-2 ml-0 mb-1" variant="success" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            <Spinner className="mr-2 ml-0 mb-1" variant="light" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            <Spinner className="mr-2 ml-0 mb-1" variant="danger" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            اتصال به پایگاه داده جامع اداره کل منطقه آذر
                            <Spinner className="ml-2 mr-0 mb-1" variant="danger" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            <Spinner className="ml-2 mr-0 mb-1" variant="light" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                            <Spinner className="ml-2 mr-0 mb-1" variant="success" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                        </Button>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default MainPage;