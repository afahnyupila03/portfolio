import { Button, Container, TextField } from "@mui/material";
import { Row , Form } from "react-bootstrap";


const ContactArea = () => {

    return (
        <>
            <Container>
                <Row>
                    <h1 className='mb-5' style={{ color: '#f45828' }}>
                        Get in Touch
                    </h1>

                    <Form>
                        <div className='mb-3'>
                            <TextField
                                id="outlined-multiline-static"
                                label="Message"
                                variant="standard"
                                rows={8}
                                col={6}
                            />
                        </div>
                        <div className="mb-3">
                            <TextField
                                label="Enter Your Name"
                                type="text"
                                autoComplete="name"
                                variant="standard"
                            />
                        </div>
                        <div className="mb-3">
                            <TextField
                                label="Email"
                                type="email"
                                autoComplete="email"
                                variant="standard"
                                color='secondary'
                            />
                        </div>
                        <div className="mb-3">
                            <TextField
                                label="Enter Subject"
                                type="text"
                                autoComplete="false"
                                variant="standard"
                            />
                        </div>
                        <Button className="mb-5" style={{ borderColor: '#f45828', color: '#f45828' }} variant='outlined'>SEND</Button>
                    </Form>
                    <div className="street-address">
                        <h5>
                            Espoir Street, Limbe.
                        </h5>
                        <h5>
                            Espoir, Takam Island.
                        </h5>
                    </div>
                    <div className="telephone-address">
                        <h5>
                            +237 6 82 70 05 49
                        </h5>
                        <h5>
                            Mon to Fri 9am to 6pm
                        </h5>
                    </div>
                    <div className="support-address mb-5">
                        <h5>
                            support@pilatech.com
                        </h5>
                        <h5>
                            Send your query anytime!
                        </h5>
                    </div>
                </Row>
            </Container>
            {/* Map */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63680.318257383675!2d9.138206358203124!3d4.016319200000012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10614bb6de529075%3A0xd19f8af504941210!2sPila%20Insurance!5e0!3m2!1sen!2sus!4v1664370002964!5m2!1sen!2sus" width="100%" height="550" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );

};

export default ContactArea;