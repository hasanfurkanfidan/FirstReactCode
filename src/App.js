
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
class App extends Component {
  state = {
    products: [],
    currentCategory: "",
    categoryId: 0
  }
  changeCategory = newCategory => {
    this.setState({ currentCategory: newCategory.categoryName })
    this.setState({ categoryId: newCategory.id })
    this.getProducts(newCategory.id)
  }

  getProducts = (categoryId) => {
    fetch("http://localhost:3334/products?categoryId=" + categoryId).then(response => response.json()).then(data => this.setState({ products: data }))
    console.log(this.state.products)
  }
  render() {
    let productInfo = { title: "ProductList" }
    let categoryInfo = { title: "CategoryList" }
    return (
      <div className="App">
        <Container>

          <Navi></Navi>

          <Row>
            <Col xs="2"><CategoryList setCategoryId={this.setCategoryId} changeCategory={this.changeCategory} currentCategory={this.state.currentCategory} info={categoryInfo}></CategoryList></Col>
            <Col xs="9"><ProductList getProducts={this.getProducts} products={this.state.products} categoryId={this.state.categoryId} info={productInfo}></ProductList></Col>

          </Row>
        </Container>
      </div>
    );
  }

}
export default App