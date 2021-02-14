
import { Container, Row, Col } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
function App() {
  let productInfo = {title : "ProductList"}

  let categoryInfo = {title : "CategoryList"}
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
        </Row>
        <Row>
          <Col xs="2"><CategoryList info={categoryInfo}></CategoryList></Col>
          <Col xs="9"><ProductList info={productInfo}></ProductList></Col>

        </Row>
      </Container>


    </div>
  );
}

export default App;
