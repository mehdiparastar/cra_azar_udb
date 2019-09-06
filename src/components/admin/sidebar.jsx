import React, { Component } from 'react'
import adminNavLinks from '../../services/adminNavLinks';
import '../../css/sidebar.css'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Jumbotron, Card, Accordion, Button, InputGroup, Form, Row, Col } from 'react-bootstrap'
import Clock from 'react-digital-clock';
import UserAvatar from '../admin/userAvatar'
import UserFirstName from '../admin/userFirstName'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <Accordion id="sidebar" className="bg-light">
                <Jumbotron className="">
                    <Row>
                        <Col>
                            <UserAvatar />
                        </Col>
                        <Col>
                            <Row>
                                <Clock hour12={false} />
                            </Row>
                            <Row>
                                <UserFirstName />
                            </Row>
                        </Col>
                    </Row>
                </Jumbotron>
                <InputGroup id="searchBox" >
                    <InputGroup.Prepend >
                        <InputGroup.Text as={Button} id="search"><span className="fa fa-search p-0"></span></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        id="search"
                        placeholder="جستجو کنید."
                        className="rounded-0"
                    />
                    {/* <input id="search"></input> */}

                </InputGroup>
                {adminNavLinks.map((nav) => {
                    return (
                        <Card key={nav.id}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={nav.id}>
                                    <span><i className={nav.icon} />{nav.label}</span>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={nav.id}>
                                <Card.Body className="p-0">
                                    <ListGroup className="list-group-flush p-0">
                                        {nav.content.map((content) => (
                                            <ListGroupItem key={content.id}>
                                                <Link to={content.to}>
                                                    <small><i className={nav.icon} />{content.label}</small></Link>
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })}
                <Card className="text-center rounded-0 stickyBottom">
                    <Card.Footer>
                        <i className="fa fa-facebook-official" />
                        <i className="fa fa-google-plus-square" />
                        <i className="fa fa-telegram" />
                        <i className="fa fa-instagram" />
                        <i className="fa fa-twitter-square" />
                        <i className="fa fa-youtube-square" />
                        <i className="fa fa-tumblr-square" />
                    </Card.Footer>
                </Card>
            </Accordion>
        )
    }
}


export default Sidebar;





// class Sidebar extends Component {

//     showSettings(event) {
//         event.preventDefault();
//     }

//     render() {
//         const adminNavLinks = getAdminNavLinks()
//         return (
//             <nav className='col-md-2 d-none d-md-block bg-light sidebar ml-0'>
//                 <div className='sidebar-sticky'>
//                     <ul className='nav flex-column'>
//                         {/* <Nav title="معرفی سازمان" id="nav-introduction">
//                             <Nav.Item href='#history'>تاریخچه سازمان</Nav.Item>
//                             <Nav.Item href='#duties'>وظایف و اختیارات</Nav.Item>
//                             <Nav.Item href='#bases'>اساسنامه سازمان</Nav.Item>
//                             <Nav.Item href='#chart' disabled>چارت سازمانی</Nav.Item>
//                         </Nav> */}
//                         {adminNavLinks.map(nav => (
//                             <li className='nav-item' key={nav.id}>
//                                 <Link className='nav-link' to={nav.link}>
//                                     <span className={nav.icon} />
//                                     <span className='m-2'>{nav.text}</span>
//                                     <ul className='nav flex-column'>
//                                         {nav.sub.map(subnav => (
//                                             <li className='nav-item' key={subnav.id}>
//                                                 <Link className='nav-link' to={subnav.link}>
//                                                     <span className={subnav.icon} />
//                                                     <small className='m-2'>{subnav.text}</small>
//                                                 </Link>
//                                                 {/* <hr className='shadow' /> */}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </Link>
//                                 <hr className='shadow' />
//                             </li>
//                         ))}
//                     </ul>

//                 </div>
//             </nav>
//         );
//     }
// }

// export default Sidebar;

