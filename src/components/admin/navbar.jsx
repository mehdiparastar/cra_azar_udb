import React, { Component } from 'react';
import { getFirstNameOfUser, getUserAvatar } from '../../services/userService'
import { toast } from 'react-toastify';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFirstName: '',
            preview: ''
        }
    }

    async componentDidMount() {
        try {
            const { data: userFirstName } = await getFirstNameOfUser()
            const { data: userAvatar } = await getUserAvatar()
            const base64Flag = 'data:image/jpeg;base64,'
            const avatarStr = userAvatar.preview.data

            this.setState({
                userFirstName: userFirstName.firstname,
                preview: base64Flag + avatarStr
            })
        } catch (ex) {
            toast.error(<div className='text-center rtl' style={{ fontFamily: "b mitra" }}>مشکلی پیش آمده است.</div>)
            console.log('ex' + ex)
        }
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    render() {
        const { userFirstName, preview } = this.state
        console.log(preview)
        return (
            <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="flex-md-nowrap p-0  rtl shadow">
                <NavbarBrand>
                    <NavbarBrand>
                        <img id="craLogo" alt="craLogo" src={preview} width="60" height="60" className="rounded-circle d-inline-block align-top m-0" />
                    </NavbarBrand>
                    <NavbarBrand>
                        <span className='text-warning text-wrap' style={{ fontSize: 13 }}>سلام بر {userFirstName}</span>
                    </NavbarBrand>
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
