import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Loading from "./Loading";
import BookDetails from "./BookDetails";

const url = "https://www.googleapis.com/books/v1/volumes?q=";
class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: "",
      bookDetails: [],
      booktitle: "",
      bookImg: "",
      bookDescription: ""
    };
  }

  handleChange = e => {
    this.setState({
      searchedValue: e.target.value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      let API = url + this.state.searchedValue;
      fetch(API)
        .then(data => {
          return data.json();
        })
        .then(data => {
          this.setState({
            bookDetails: data.items,loading:true
          });
          //   console.log(data.items[0].volumeInfo.title)
          //   console.log(data.items.map((data,index)=>{
          //       return data.volumeInfo.title
          //   }))
        });
    }
  };
  render() {
    console.log(this.state.bookDetails);
    return (
      <div>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Search"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="filled"
          onChange={this.handleChange}
          value={this.state.searchedValue}
          onKeyPress={this.handleKeyPress}
          InputLabelProps={{
            shrink: true
          }}
        />

        {this.state.loading ? (
          <BookDetails bookDetails={this.state.bookDetails} />
          ) : (null
        )}
      </div>
    );
  }
}

export default BookList;
