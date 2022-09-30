import { Col, Row } from "react-bootstrap";
import { Container } from '@mui/material';
import { Link } from "react-router-dom";


const PortfolioBanner = () => {

    return (
        <>
            <div className='portfolio-banner'
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-vector/realistic-luxury-background_23-2149331830.jpg?w=1380&t=st=1664562126~exp=1664562726~hmac=38c97024dc564105057f9ff353828b0e24a46985f33d8e9de10073a48e807d96")',
                    marginBottom: '8rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <Container 
                    style={{
                        paddingTop: '10rem',
                        paddingBottom: '10rem',
                    }}
                >
                    <Row>
                        <Col xs lg="4">
                            <h1 style={{
                                fontSize: '3rem'
                            }}>
                                My Portfolio
                            </h1>
                            <div className='portfolio-links' style={{
                                color: 'white',
                                fontSize: '2rem'
                            }}>
                                <Link to='/home' style={{
                                    textDecoration: 'none',
                                    fontSize: '1.5rem',
                                    color: '#f45828'
                                }}>Home </Link> /
                                <Link to='/portfolio' style={{
                                    textDecoration: 'none',
                                    fontSize: '1.5rem',
                                    color: '#f45828'
                                }}> My Portfolio</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

};

export default PortfolioBanner;