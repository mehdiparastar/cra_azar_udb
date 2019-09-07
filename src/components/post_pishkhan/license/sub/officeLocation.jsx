import React, { Component } from 'react';
import { Form, Container, Row, Col, Card, FormGroup, InputGroup, Button } from 'react-bootstrap'
import Select from 'react-select'
import '../../../../css/post_pishkhan/license/sub/officeLocation.css'

class LicenseOfficeLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ];
        return (
            <Card id="licenseOfficeLocation" style={{ width: "360px", fontSize: 13 }}>
                <Card.Header className="text-center bg-success text-light">موقعیت دفتر</Card.Header>
                <Card.Body>
                    <Form>
                        <FormGroup as={Row} className="text-center" as={Row} controlId="cityOrVillage">
                            <Col xs={6}>
                                <Form.Check type="radio" label="شهری" name="cityOrVillage" id="isCity" />
                            </Col>
                            <Col xs={6}>
                                <Form.Check type="radio" label="روستایی" name="cityOrVillage" id="isVillage" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="latLong">
                            <Col xs={6}>
                                <Form.Control type="number" placeholder="عرض جغرافیایی" name="lat" />
                            </Col>
                            <Col xs={6}>
                                <Form.Control type="number" placeholder="طول جغرافیایی" name="long" />
                            </Col>
                        </FormGroup>

                        <hr className="bg-warning" />

                        <FormGroup as={Row} controlId="ostan">
                            <Col xs={3}>
                                <Form.Label>استان</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options} inputId="ostan" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="shahrestan">
                            <Col xs={3}>
                                <Form.Label>شهرستان</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options} inputId="shahrestan" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="bakhsh">
                            <Col xs={3}>
                                <Form.Label>بخش</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options} inputId="bakhsh" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="dehestan-shahr">
                            <Col xs={3}>
                                <Form.Label>دهستان/شهر</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options} inputId="dehestan-shahr" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="abadi">
                            <Col xs={3}>
                                <Form.Label >آبادی</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Select options={options} inputId="abadi" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="postalCode">
                            <Col xs={3}>
                                <Form.Label >کد پستی</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Form.Control type="string" />
                            </Col>
                        </FormGroup>

                        <FormGroup as={Row} controlId="address">
                            <Col xs={3}>
                                <Form.Label >آدرس</Form.Label>
                            </Col>
                            <Col xs={9}>
                                <Form.Control as="textarea" />
                            </Col>
                        </FormGroup>

                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default LicenseOfficeLocation;