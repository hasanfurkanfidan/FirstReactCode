
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound"
import CartList from "./CartList"
class App extends Component {
  state = {
    products: [],
    currentCategory: "",
    categoryId: 0,
    cart: []
  }
  changeCategory = newCategory => {
    this.setState({ currentCategory: newCategory.categoryName })
    this.setState({ categoryId: newCategory.id })
    this.getProducts(newCategory.id)
  }
  addToCart = (product) => {
    var newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem != null) {
      addedItem.quantity = addedItem.quantity + 1
      alertify.success(addedItem.product.productName + " sepetinize eklendi", 2);

    }
    else {
      newCart.push({ product: product, quantity: 1 });
      alertify.success(product.productName + " sepetinize eklendi", 2);
    }

    this.setState({ cart: newCart })
  }
  removeFromCart = (cartItem) => {
    console.log(cartItem.product)
    var newCart = this.state.cart
    this.state.cart.pop(cartItem)
    this.setState({ cart: newCart })
    alertify.error("ürün sepetinizden başarı ile silindi")

    //alertify.error(newCartItem.product.productName + " ürünü sepetinizden başarıyla silindi")
  }
  getProducts = (categoryId) => {
    fetch("http://localhost:3334/products?categoryId=" + categoryId).then(response => response.json()).then(data => this.setState({ products: data }))
  }
  render() {
    let productInfo = { title: "ProductList" }
    let categoryInfo = { title: "CategoryList" }
    return (
      <div className="App">
        <Container>

          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>

          <Row>
            <Col xs="2"><CategoryList setCategoryId={this.setCategoryId} changeCategory={this.changeCategory} currentCategory={this.state.currentCategory} info={categoryInfo}></CategoryList></Col>


            <Col xs="9">
              <Switch>
                <Route exact path="/" render={
                  props => (
               
                    <ProductList {...props} getProducts={this.getProducts} addToCart={this.addToCart} products={this.state.products} categoryId={this.state.categoryId} info={productInfo}></ProductList>
                  )
                } ></Route>
                <Route exact path="/sepet" render={props=>(
                 <CartList cart={this.state.cart} removeFromCart={this.removeFromCart}></CartList>
                )}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }

}
export default App