import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    NavbarText,
    Badge
} from 'reactstrap';
class CartSummary extends Component {
    renderControl() {
        return (<UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Sepetiniz-{this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map(p =>


                    <DropdownItem>
                        <button onClick={this.props.removeFromCart} className="btn btn-danger">Sil</button>
                        {p.product.productName}
                        <Badge>{p.quantity}</Badge>
                    </DropdownItem>



                )}
                <DropdownItem divider></DropdownItem>
                <DropdownItem>
                    <Link to="sepet">Sepete Git</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>)
    }
    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Sepetiniz boş</NavLink>
            </NavItem>
        )
    }
    render() {
        return (
            this.props.cart.length > 0 ? this.renderControl() : this.renderEmptyCart())
    }
}

export default CartSummary;