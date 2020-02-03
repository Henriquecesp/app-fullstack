import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default class Product extends Component {
  state = {
    product: {}
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`products/${id}`);
    this.setState({ product: response.data });
  }
  render() {
    const { product } = this.state;
    return (
      <div className='product-info'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          URL:{" "}
          <a target='_blank' href={product.url} rel='noopener noreferrer'>
            {product.url}
          </a>
        </p>
        <article key={product._id}>
          <Link to={`/edit/${product._id}`}>Edit</Link>
        </article>
      </div>
    );
  }
}
