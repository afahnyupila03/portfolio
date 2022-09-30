import { Button, Container } from "@mui/material";
import { Row, Col } from 'react-bootstrap';


const Banner = () => {

    return (
        <>
            <div className='banner'
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
                        <Col xs lg="6">
                            <h5 style={{ fontSize: '1.2rem' }}>GET EVERY SINGLE SOLUTION.</h5>
                            <h1 className="mb-4" style={{ fontSize: '2.5rem', color: '#f45828' }}>I'm Desinger Afahnyu T. Pila</h1>
                            <p className='mb-5' style={{fontSize: '1rem'}}>
                                jhorem rfpsum golor sidt ame, consectetur
                                adipiscing elit, eiusmod tempor incididunt
                                utchjhg labore bet dolore magna aliqua. Quis 
                                ipsum suspendisse ultrices gravida.
                            </p>
                            <Row>
                                <Col>
                                    <Button variant='contained' style={{ backgroundColor: '#f45828' }}>Learn More</Button>
                                </Col>
                                <Col>
                                    <Button variant='outlined' style={{ borderColor: '#f45828', color: '#f45828' }}>Hire Me</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

};

export default Banner;