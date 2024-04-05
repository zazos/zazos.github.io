import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <div className="navbar-title">Panagiotis Zazos</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} style={{ fontFamily: 'PirataOne', fontSize: '25px' }}>Home</Nav.Link>
                        <Nav.Link href="#About" className={activeLink === 'About' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('About')} style={{ fontFamily: 'PirataOne', fontSize: '25px' }}>About</Nav.Link>
                        <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')} style={{ fontFamily: 'PirataOne', fontSize: '25px' }}>Projects</Nav.Link>
                        <Nav.Link href="#Visualization" className={activeLink === 'Visualization' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Visualization')} style={{ fontFamily: 'PirataOne', fontSize: '25px' }}>Visualization</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')} style={{ fontFamily: 'PirataOne', fontSize: '25px' }}>Contact</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/panagiotis-zazos-ba1a02188/"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.facebook.com/pzazos/"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/probablyzazos/"><img src={navIcon3} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
}