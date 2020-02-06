import React, { Component } from "react";
import api from "../../services/api";
import axios from "axios";
import "./styles.css";

export default class Edit extends Component {
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
      product: {},
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

  onSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      description: this.state.description,
      url: this.state.url
    };
    const { id } = this.props.match.params;
    axios
      .put(`http://localhost:3001/api/products/${id}`, data)
      .then(res => console.log("Edit finished", res.data))
      .catch(error => console.log(error));
    window.location = "/";
  };
  onSubmitDelete = e => {
    const { id } = this.props.match.params;
    console.log(id);
    axios.delete(`http://localhost:3001/api/products/${id}`);
    if (window.confirm("Delete ?")) {
      window.location = "/";
    }
  };
  componentWillUnmount() {
    window.location = "/";
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`products/${id}`);
    this.setState({ product: response.data });
  }
  render() {
    const { product } = this.state;
    return (
      <div className='product-edit'>
        <h1>Edit informations of {product.title}</h1>
        <strong>Title</strong>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder={product.title}
            value={this.state.title}
            onChange={this.onChangeProductTitle}
            required
          />
          <strong>Description</strong>
          <input
            type='text'
            placeholder={product.description}
            value={this.state.description}
            onChange={this.onChangeProductDescription}
            required
          />
          <strong>Url</strong>
          <input
            type='text'
            placeholder={product.url}
            value={this.state.url}
            onChange={this.onChangeProductUrl}
            required
          />
          <input type='submit' className='submit' value='Change' />
        </form>
        <form onSubmit={this.onSubmitDelete}>
          <input type='submit' className='delete' value='Delete' />
        </form>
      </div>
    );
  }
}
