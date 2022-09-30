import { Container } from "@mui/material";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsSuitHeartFill, BsInstagram, BsGlobe } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { IconContext } from "react-icons/lib";


const Footer = () => {

    return (
        <>
            <div className='footer' style={{paddingTop: '8rem', paddingBottom: '3rem'}}>
                <Container>
                    <Row>
                        <div className='footer-data text-center mb-3'>
                            <NavLink to='/home' className='navbar-brand'>
                                <h1 className='mb-3' style={{color: '#f45828'}}>
                                    PORTFOLIO
                                </h1>
                            </NavLink>
                            <h5 className='mb-3'>
                                Espoir Street Limbe, Post Office Box 3035
                            </h5>
                            <h5 className='mb-3'>
                                Espoir Street, Limbe, Cameroon
                            </h5>
                        </div>
                        <Col sm="8">
                            <h6>
                                Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with
                                <span>
                                    <IconContext.Provider value={{
                                        className: 'mx-1',
                                        color: 'red'
                                    }}>
                                        <BsSuitHeartFill />
                                    </IconContext.Provider>
                                </span>
                                by <span>PilaTech</span>
                            </h6>
                        </Col>
                        <Col sm="4">
                            <h6>
                                Stay Connected
                                <IconContext.Provider value={{
                                    className: 'mx-2',
                                    size: '1.2em',
                                    color: '#f45828'
                                }}>
                                    <GrTwitter />
                                    <FaFacebookF />
                                    <BsGlobe />
                                    <BsInstagram />
                                </IconContext.Provider>
                            </h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

};

export default Footer;