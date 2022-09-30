
import { Container, Button } from '@mui/material';
import { Col, Row } from 'react-bootstrap';


const ContactTab = () => {

    return (
        <>
            <Container style={{ paddingBottom: '8rem' }}>
                <Row>
                    <Col sm="8" className='mb-5'>
                        <Col xs lg='7'>
                            <h1 style={{color: '#f45828'}}>
                                Don't worry for contact i'm available
                            </h1>
                        </Col>
                    </Col>
                    <Col sm="4">
                        <Button variant='contained' style={{backgroundColor: '#f45828'}}>Contact Me Now</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default ContactTab;