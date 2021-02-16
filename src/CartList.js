import React, { Component } from 'react';
import { Table,Button } from 'reactstrap';

class CartList extends Component {
    renderCart(){
        return(
            <Table striped>
             <thead>
                    <tr>
                        <th>Ürün İsmi</th>
                        <th>Fiyat</th>
                        <th>Kategori Id</th>
                        <th>Adet</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartLine => (
                            <tr>
                                <td>{cartLine.product.productName}</td>
                                <td>{cartLine.product.unitPrice}</td>
                                <td>{cartLine.product.categoryId}</td>
                                <td>{cartLine.quantity}</td>
                                <td><Button color="danger" onClick={()=>this.props.removeFromCart(cartLine.product)}>Sepetten Çıkar</Button></td>
                            </tr>

                        ))


                    }

                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
               {this.renderCart()}
            </div>
        );
    }
}

export default CartList;