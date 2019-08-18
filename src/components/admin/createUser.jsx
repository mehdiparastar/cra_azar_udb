import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            email: '',
            password: '',
            tokens: '',
            roles: '',
            useravatar: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                <Container className="rtl">
                    creating User
                </Container>
            </React.Fragment>
        );
    }
}

export default CreateUser;