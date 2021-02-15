import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';
export default class Navi extends Component {
    state = {
        isOpen: false,
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    };



    render() {
        return (<div>

            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">E-Ticaret Uygulaması</NavbarBrand>
                <NavbarToggler onClick={() => this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>                    
                            <CartSummary removeFromCart = {this.props.removeFromCart} cart={this.props.cart}></CartSummary>                      
                    </Nav>
                    <NavbarText>Alışverişin en karlı hali</NavbarText>
                </Collapse>
            </Navbar>
        </div>
        )
    }
}

