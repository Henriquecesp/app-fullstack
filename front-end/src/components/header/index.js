import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id='main-header'>
      <Link to='/'>Codeweek</Link>
      <Link to='/create'>Create</Link>
    </header>
  );
};
export default Header;
