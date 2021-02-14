import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
   
        state = {
            categories: [
                { name: "elektronik", id: 1 }, { name: "giyim", id: 2 }
            ],
            currentCategory : ""
        }
    changeCategory =(newCategory)=>{
      this.setState({currentCategory:newCategory})
    }
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <h2>{this.state.counter}</h2>

                <ListGroup>
                    {
                        this.state.categories.map(category=>(
                            <ListGroupItem onClick={()=>this.changeCategory(category.name)} key={category.id}>{category.name}</ListGroupItem>
                        ))
                    }
                  
                   <h4>{this.state.currentCategory}</h4>
                </ListGroup>
            </div>
        );
    }
}

export default CategoryList;