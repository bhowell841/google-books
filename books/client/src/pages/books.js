import React, { Component } from "react";
import axios from "axios";

class Books extends Component {
    state = {
      books: [],
      title: "",
      author: "",
      synopsis: ""
    };
  
    componentDidMount() {
        // this.loadBooks();
      }

    handleSearchTitle = (event) => {
      // console.log(event.target.value)
      this.setState({ title: event.target.value })
    }

    handleSubmit = () => {
      console.log("You got clicked")
      axios.request({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.title
      }).then((response) => {
        this.setState({ books: response.data.items}, () => {
          console.log("State: " + this.state);
        })
      }).catch((error) => {
        console.log(error)
      });
    }


    //   https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyC24lKC4eaSu80H280a3KevNjSjo_eu5Ao
    
    
    
      

    

      render() {
        console.log(this.state)
        return (
          <div>
                <h1>Search A Book</h1>
                <h1>{ this.state.title }</h1>
                <input onChange={ this.handleSearchTitle }></input>
                <button onClick={ this.handleSubmit }>Search</button>
                
          </div>
        );
      }
    }

export default Books;