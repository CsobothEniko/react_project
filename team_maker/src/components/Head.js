import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

export const Head = () => {
    return (
    <Navbar color= "dark" dark>
        <Container>
            <NavbarBrand> Your Team of Characters  </NavbarBrand>
            <Nav >
                <NavItem >
                    <Link className="btn btn-info" to="/add">Add New Character</Link>

                </NavItem>
            </Nav>
        </Container>
    </Navbar>

    )
}