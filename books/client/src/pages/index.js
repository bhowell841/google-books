import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";


class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };
  
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
    .catch(err => console.log(err));
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <h1>
                Saved Books
              </h1>
          </Col>
        </Row>
      
       
      </Container>
    );
  }
}

export default Saved;