import React from "react";
import { Link } from "react-router-dom";
import Container from "../../utilis/Container";
import "./Styles.scss";
const Index = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrap">
          <Link className="header__wrap--logo" to="/">
            <h1>Кампус</h1>
          </Link>
          <nav className="header__wrap--nav">
            <Link to="/form">Online statement</Link>

            <Link to="/news">News</Link>
            <Link to="/info">About us</Link>
            <Link to="/list">List</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Index;
