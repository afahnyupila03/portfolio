import { ImMenu3 } from 'react-icons/im'
import Button from '@mui/material/Button';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';

const NavabarTab = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" fixed='top' variant="light" className='p-2'>
                <Container>
                    <NavLink to='/home' className='navbar-brand' href="#home" style={{color: '#f45828'}}>PORTFOLIO</NavLink>
                    <Navbar.Toggle navbar-toggler='true'  default style={{border: 0}}>
                        <IconContext.Provider value={{
                            size: '1.2em',
                            color: '#f45828'
                        }}>
                            <ImMenu3 />
                        </IconContext.Provider>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto algin-self-right d-flex mb-3" fixed="top">
                            <NavLink to='/home' className='nav-link' style={{ color: '#f45828' }} href="#home">Home</NavLink>
                            <NavLink to='/about' className='nav-link' style={{ color: '#f45828' }} href="#about">About</NavLink>
                            <NavLink to='/services' className='nav-link' style={{ color: '#f45828' }} href="#services">Services</NavLink>
                            <NavLink to='/portfolio' className='nav-link' style={{ color: '#f45828' }} href="#portfolio">Portfolio</NavLink>
                            <NavLink to='/contact' className='nav-link' style={{ color: '#f45828' }} href="#contact">Contact</NavLink>
                        </Nav>
                        <Nav>
                            <Button variant="contained" style={{ backgroundColor: '#f45828' }}>GET FREE CONSULTENT</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

};


export default NavabarTab;