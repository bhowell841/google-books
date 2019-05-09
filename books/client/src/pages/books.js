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


      //  Next i would save my results into the books array in state
      // Then render them and the pertinent info to the the DOM, along with a save button for each result
      // Clicking the save button would send a call to the DB saving each book in the DB
      // The saved page would render all the books saved to the database to the DOM along with a remove button
      // Remove button would clear the books from the DB.
  

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