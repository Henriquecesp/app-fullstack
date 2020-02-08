import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    marginTop: "10px",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

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
          <Link to={`/edit/${product._id}`}>
            <StyledButton>edit</StyledButton>
          </Link>
        </article>
      </div>
    );
  }
}
