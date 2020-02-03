import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.onChangeProductTitle = this.onChangeProductTitle.bind(this);
    this.onChangeProductDescription = this.onChangeProductDescription.bind(
      this
    );
    this.onChangeProductUrl = this.onChangeProductUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      url: ""
    };
  }

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

    axios
      .post("http://localhost:3001/api/products", data)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));

    this.setState({ title: "", description: "", url: "" });
    alert("Created");
    if (window.confirm("Continue to home page ?")) {
      window.location = "/";
    }
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
