import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
   
        state = {
            categories: [
              
            ],
          
        }
        componentDidMount(){
            this.getCategories();
        }
    getCategories=()=>{
        fetch("http://localhost:3334/categories").then(response => response.json()).then(data => this.setState({categories:data}))
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h2>{this.state.counter}</h2>

                <ListGroup>
                    {
                        this.state.categories.map(category=>(
                            <ListGroupItem active = {this.props.currentCategory===category.categoryName?true:false} onClick={()=>this.props.changeCategory(category)} key={category.id}>{category.categoryName}</ListGroupItem>
                        ))
                    }
                  
                   <h4>{this.props.currentCategory}</h4>
                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;