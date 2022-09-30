import { Container } from "@mui/material";
import { Col, Row } from "react-bootstrap";


const AboutText = () => {

    return (
        <>
            <Container style={{ paddingBottom: '8rem' }}>
                <Row>
                    <Col sm="6"></Col>
                    <Col sm="6">
                        <h1 className='mb-3'>
                            I Create Products Not Just Art.
                        </h1>
                        <p>
                            Unlimited rewards. enjoy attractive 
                            discounts flexible Payme options global 
                            usage. Unlimited rewards. enjoy attracti 
                            exible ayment options global usage.
                        </p>
                        <Col xs lg="7" className='mx-5' style={{ borderLeft: 'solid #f45828' }}>
                            <p className="mx-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                            </p>
                        </Col>
                        <p>
                            Unlimited rewards. enjoy 
                            attractive discounts flexible 
                            Payme options global usage. 
                            Unlimited rewards. enjoy attracti 
                            exible ayment options global usage.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );

};

export default AboutText;