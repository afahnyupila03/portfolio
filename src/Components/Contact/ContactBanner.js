import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const ContactBanner = () => {

    return (
        <>
            <div className='contact-banner'
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/realistic-luxury-background_23-2149331830.jpg?w=1380&t=st=1664562126~exp=1664562726~hmac=38c97024dc564105057f9ff353828b0e24a46985f33d8e9de10073a48e807d96")',
                    marginBottom: '8rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <Container style={{
                    paddingTop: '10rem',
                    paddingBottom: '10rem'
                }}>
                    <Row>
                        <Col xs lg="4">
                            <h1
                                style={{ fontSize: '3rem' }}
                            >
                                Contact Me
                            </h1>
                            <div className="contact-links" style={{ color: 'white', fontSize: '2rem' }}>
                                <Link to='/home' style={{ color: '#f45828', textDecoration: 'none', fontSize: '1.5rem' }}>Home </Link> /
                                <Link to='/contact' style={{ color: '#f45828', textDecoration: 'none', fontSize: '1.5rem' }}> Contact</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

};

export default ContactBanner;