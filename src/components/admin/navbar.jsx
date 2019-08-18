import React, { Component } from 'react';
import { getFullNameOfUser } from '../../services/userService'
import { toast } from 'react-toastify';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFullName: ''
        }
    }

    async componentDidMount() {
        try {
            const { data: userFullName } = await getFullNameOfUser()
            this.setState({ userFullName: userFullName.fullname })
        } catch (ex) {
            toast.error(<div className='text-center rtl' style={{ fontFamily: "b mitra" }}>مشکلی پیش آمده است.</div>)
            console.log('ex' + ex)
        }
    }

    render() { 
        const { userFullName } = this.state
        return (
            <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="flex-md-nowrap p-0  rtl shadow">
                <NavbarBrand>
                    <img id="craLogo" alt="craLogo" src="https://i.pravatar.cc/70" width="60" height="60" className="rounded-circle d-inline-block align-top m-0" />
                </NavbarBrand>
                <NavbarBrand>
                    <span className='text-warning text-wrap' style={{fontSize:13}}>Hi, {userFullName.split(' ')[0].toUpperCase()}</span>
                </NavbarBrand>                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link className="ml-auto text-warning" href="/admin/logout">خروج</Nav.Link>                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
 
export default NavBar;
