import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Table, Button } from "reactstrap";
class ProductList extends Component {
    state = {

    }
     addToCart=product=>{
         alert(product.productName)
     }
 
    render() {
        console.log(this.props.products)
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Kategori Id</th>
                        <th>Stok Sayısı</th>
                        <th>Sepete Ekle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.categoryId}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button onClick={()=>this.addToCart(product)}>Sepete Ekle</Button></td>
                            </tr>

                        ))


                    }

                </tbody>
            </Table>
        );
    }
}

export default ProductList;