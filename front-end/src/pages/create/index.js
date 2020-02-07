import React, { Component } from "react";
import "./styles.css";
import api from "../../services/api";

export default class Post extends Component {
  constructor(props) {
    super(props);

    //bind the (this) to each method
    this.onChangeProductTitle = this.onChangeProductTitle.bind(this);
    this.onChangeProductDescription = this.onChangeProductDescription.bind(
      this
    );
    this.onChangeProductUrl = this.onChangeProductUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //initial state of the component
    this.state = {
      title: "",
      description: "",
      url: ""
    };
  }

  //methods
  onChangeProductTitle = e => {
    this.setState({ title: e.target.value });
  };

  onChangeProductDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeProductUrl = e => {
    this.setState({ url: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url
    };

    api
      .post("/products", data)
      .then(res => console.log("Created", res.data))
      .catch(error => console.log(error));

    this.setState({ title: "", description: "", url: "" });
    window.location = "/";
  }
  //--------------------------------------------------------------------------------------------
  render() {
    return (
      <div className='product-post'>
        <h1>Create new</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Title
            <br />
            <input
              type='text'
              placeholder='Title of the item'
              value={this.state.title}
              onChange={this.onChangeProductTitle}
            />
          </label>
          <br />
          <label>
            Description
            <br />
            <input
              type='text'
              placeholder='Description of the item'
              value={this.state.description}
              onChange={this.onChangeProductDescription}
            />
          </label>
          <br />
          <label>
            Url
            <br />
            <input
              type='url'
              placeholder='http:// URL of the item'
              value={this.state.url}
              onChange={this.onChangeProductUrl}
            />
          </label>
          <br />
          <input type='submit' value='Create' />
        </form>
      </div>
    );
  }
}
