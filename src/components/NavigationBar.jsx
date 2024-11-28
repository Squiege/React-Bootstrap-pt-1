import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
            <Navbar.Brand href='/'>My Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/error'>Error Handler</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar