import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import CartSidebar from './Cart';


const NavBar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login")
  }


  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="/#/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '80px', marginLeft: '3rem', display: 'flex', gap: '3rem' }}
              navbarScroll
            >
              <Nav.Link href="/#/products/:id">products</Nav.Link>
              <Nav.Link href="/#/purchase">purchase</Nav.Link>



              {
                token ? (<Nav.Link
                  id='logout'
                  variant="secondary" as={Button} onClick={logout} >log out</Nav.Link>
                ) : (
                  <Nav.Link
                    style={{ color: 'black' }}
                    id='login'
                    variant="secondary" href="/#/login">login</Nav.Link>
                )
              }
              <Nav.Link
                id='cart'
                style={{ fontSize: "20px" }}
                variant="secondary"
                as={Button}
                onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartSidebar show={show} handleClose={handleClose} />
    </>
  );

};

export default NavBar;