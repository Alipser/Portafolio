
import { Nav, Navbar, Container, Stack } from "react-bootstrap";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "./nav.css"



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');



    
    function onClickSetActiveLink(value,e) {
        
        e.stopPropagation()
        console.log((e.target))
        setActiveLink(value);
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Romario-Julio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? 'activated' : ''} onClick={(e) => { onClickSetActiveLink("home", e) }}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "activated" : ''} onClick={(e) => { onClickSetActiveLink("skills", e) }}>Skills Set</Nav.Link>
                        <Nav.Link href="#portfolio" className={activeLink === "portfolio" ? "activated" : ''} onClick={(e) => { onClickSetActiveLink("portfolio", e) }}>PortFolio</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact Me!</Nav.Link>
                        <Stack direction="horizontal" gap={2}>
                           <Nav.Link  target="_blank" href="https://wa.me/+573162828394">
                                <FontAwesomeIcon icon={faWhatsapp} />
                           </Nav.Link>
                           <Nav.Link  target="_blank"   href="https://github.com/Alipser">
                                <FontAwesomeIcon icon={faGithub} />
                           </Nav.Link>
                           <Nav.Link target="_blank" href="https://www.linkedin.com/in/romario-julio-91a610113/">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                           </Nav.Link>
                        </Stack>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}