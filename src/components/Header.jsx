import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="https://e7.pngegg.com/pngimages/645/388/png-clipart-computer-icons-shopping-cart-shopping-cart-blue-retail.png"
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    E CART
                </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
