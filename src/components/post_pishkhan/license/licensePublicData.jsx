import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import LicenseOfficeLocation from './sub/officeLocation'
import LicenseOfficeStatus from './sub/officeStatus'

class LicensePublicData extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <Container className="mt-2">
                <Row>
                    <Col>
                        <LicenseOfficeLocation />
                    </Col>
                    <Col>
                        <LicenseOfficeStatus />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LicensePublicData;