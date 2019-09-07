import React, { Component } from 'react';
import { Form, Container, Row, Col, Card, FormGroup, InputGroup, Button } from 'react-bootstrap'
import Select from 'react-select'
import '../../../../css/post_pishkhan/license/sub/officeStatus.css'
import { licensePPComboValues } from '../../../../services/post_pishkhanComboValues'

class LicenseOfficeStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const options = licensePPComboValues
        console.log(options["licenseStatus"])
        return (
            <Card id="licenseOfficeStatus" style={{ width: "360px", fontSize: 13 }}>
                <Card.Header className="text-center bg-success text-light">وضعیت دفتر</Card.Header>
                <Card.Body>
                    <Form>

                        <FormGroup as={Row} controlId="licenseStatus">
                            <Col xs={3}>
                                <Form.Label>وضعیت پروانه</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options.licenseStatus} inputId="licenseStatus" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="activityStatus">
                            <Col xs={3}>
                                <Form.Label>وضعیت فعالیت</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options.controlId} inputId="activityStatus" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="ownerType">
                            <Col xs={3}>
                                <Form.Label>نوع شخص</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options.controlId} inputId="ownerType" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="possessionType">
                            <Col xs={3}>
                                <Form.Label>نوع مالکیت دفتر</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options.controlId} inputId="possessionType" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="officeArea">
                            <Col xs={3}>
                                <Form.Label >متراژ دفتر</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Form.Control type="number" />
                            </Col>
                        </FormGroup>

                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LicenseOfficeStatus;