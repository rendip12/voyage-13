import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark" >
            <Container className="mt-4 border rounded border-black bg-black">
                <Navbar.Brand className="text-danger" href="/">VOYAGE</Navbar.Brand>
                <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link >Info</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export  default NavigationBar