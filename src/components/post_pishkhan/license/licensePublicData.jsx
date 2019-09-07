import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap'
import LicenseOfficeLocation from './sub/officeLocation'
import LicenseOfficeStatus from './sub/officeStatus'

class LicensePublicData extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <Container className="mt-5">
                <Row>
                    <LicenseOfficeLocation />
                    <LicenseOfficeStatus />
                </Row>
            </Container>
        );
    }
}

export default LicensePublicData;