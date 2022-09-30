import { Button, TextField, FormGroup } from "@mui/material";
import { Container } from "@mui/system";
import { Col, Form, Row } from "react-bootstrap";


const MessageTab = () => {

    return (
        <>
            <Container style={{paddingBottom: '8rem'}}>
                <Row>
                    <Col sm="8" className='mb-5'>
                        <Col xs lg="6">
                            <h1 className='mb-3' style={{ color: '#f45828' }}>
                                If Not Now, When?
                                Let's Work Together!
                            </h1>
                            <p>
                                Consectetur adipiscing elit,
                                sed do eiusmod tempor ididunt
                                ut labore et dolore magna aliqua.
                                Quis ipsum suspendisces gravida.
                                Risus commodo viverra.
                            </p>
                            <h1 className='nameSignature' style={{
                                fontFamily: "'Meddon', cursive"
                            }} >
                                Afahnyu Pila
                            </h1>
                        </Col>
                    </Col>
                    <Col sm="4">
                        <Form style={{ color: '#f45828' }}>
                            <FormGroup className='mb-3'>
                                <TextField
                                    label="Full Name"
                                    type="text"
                                    autoComplete="false"
                                    variant="outlined"
                                />
                            </FormGroup>
                            <FormGroup className='mb-3'>
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                />
                            </FormGroup>
                            <FormGroup className='mb-5'>
                                <TextField
                                    label="Your Message"
                                    type="text"
                                    autoComplete="false"
                                    variant="outlined"
                                />
                            </FormGroup>
                            <Button variant='contained' className='m-auto align-self-center d-flex' style={{ backgroundColor: '#f45828' }}>Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default MessageTab;