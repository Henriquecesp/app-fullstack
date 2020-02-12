import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

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
const StyledLoading = withStyles({
  root: {
    color: "#FE6B8B"
  }
})(CircularProgress);
export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
    loading: true
  };

  componentDidMount() {
    this.loadProducts();
  }
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ...productInfo } = response.data;

    this.setState({ loading: false, products: docs, productInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProducts(pageNumber);
  };

  render() {
    const { products, page, productInfo, loading } = this.state;
    return (
      <div className='product-list'>
        {loading ? (
          <div className='loading-container'>
            <article>
              <StyledLoading />
            </article>
          </div>
        ) : (
          products.map(product => (
            <article key={product._id}>
              <strong>{product.title}</strong>
              <p>{product.description}</p>

              <Link to={`/product/${product._id}`}>
                <StyledButton variant='contained' color='primary'>
                  View
                </StyledButton>
              </Link>
            </article>
          ))
        )}
        <div className='actions'>
          <StyledButton
            disabled={page === 1}
            onClick={this.prevPage}
            variant='contained'
            color='primary'
          >
            Prev
          </StyledButton>
          <StyledButton
            disabled={page === productInfo.pages}
            onClick={this.nextPage}
            variant='contained'
            color='primary'
          >
            Next
          </StyledButton>
        </div>
      </div>
    );
  }
}
