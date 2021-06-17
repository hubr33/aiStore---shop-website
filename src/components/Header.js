import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

class Header extends Component {
  state = {
    adminLogin: "admin",
    adminPassword: "password",
    writtenLogin: "",
    writtenPassword: "",
    showAddItem: false,
  };

  handleGetLoginAndPassword = (evt) => {
    let name = evt.target.name;
    this.setState({ [name]: evt.target.value });
  };

  handleShowAddItem = () => {
    const loginInput = document.querySelector(".inputLogin");
    const passInput = document.querySelector(".inputPass");
    const error = document.querySelector(".error-login");
    const addWrapper = document.querySelector(".add-wrapper");
    const shadowHeader = document.querySelector("header .shadow");

    if (
      this.state.adminLogin === this.state.writtenLogin &&
      this.state.adminPassword === this.state.writtenPassword
    ) {
      loginInput.value = "";
      passInput.value = "";
      error.classList.remove("active");
      addWrapper.classList.remove("active");
      this.setState({ showAddItem: true });
      shadowHeader.classList.remove("active");
      if (this.state.showAddItem) {
        const btn = document.querySelector(".add-item");
        btn.removeAttribute("disabled");
      } else {
        return;
      }
    } else {
      error.classList.add("active");
    }
  };

  handleLogin = () => {
    const shadowHeader = document.querySelector("header .shadow");
    shadowHeader.classList.add("active");
    const addWrapper = document.querySelector(".add-wrapper");
    addWrapper.classList.toggle("active");
    if (addWrapper.classList.contains("active")) {
      return;
    } else {
      addWrapper.classList.toggle("active");
    }
  };

  handleCloseLogin = () => {
    const loginInput = document.querySelector(".inputLogin");
    const passInput = document.querySelector(".inputPass");
    const addWrapper = document.querySelector(".add-wrapper");
    const shadowHeader = document.querySelector("header .shadow");
    const error = document.querySelector(".error-login");
    addWrapper.classList.remove("active");
    error.classList.remove("active");
    shadowHeader.classList.remove("active");
    loginInput.value = "";
    passInput.value = "";
  };

  handleOpenCreateItem = () => {
    document.querySelector("section").classList.add("roll");
    document.querySelector(".form-shadow").classList.add("open");
  };

  handleOpenCart = () => {
    const orderInputs = document.querySelectorAll(".orderItem input");
    const orderSelect = document.querySelector(".orderItem select");
    orderInputs.forEach((input) => {
      input.classList.remove("error");
      orderSelect.classList.remove("error");
    });
    document.querySelector(".cart-container").classList.toggle("active");
  };

  handleEnableButton = () => {
    const btn = document.querySelector(".add-item");
    const cartBtn = document.querySelector(".shop-cart");
    cartBtn.removeAttribute("disabled");
    if (btn === null) {
      return;
    } else {
      btn.removeAttribute("disabled");
    }
  };

  handleDisableButton = () => {
    const btn = document.querySelector(".add-item");
    const cartBtn = document.querySelector(".shop-cart");
    cartBtn.disabled = "true";
    if (btn === null) {
      return;
    } else {
      btn.disabled = "true";
    }
  };

  render() {
    return (
      <header>
        <div className="shadow"></div>
        <h2 className="title">ajStore</h2>
        <nav>
          <ul>
            {this.state.showAddItem ? (
              <button onClick={this.handleOpenCreateItem} className="add-item">
                Dodaj rzecz
              </button>
            ) : null}

            <NavLink
              onClick={this.handleEnableButton}
              to="/"
              className="products"
            >
              Produkty
            </NavLink>
            <NavLink
              onClick={this.handleDisableButton}
              to="/bargain"
              className="bargain"
            >
              Okazje
            </NavLink>
            <button onClick={this.handleOpenCart} className="shop-cart">
              Koszyk
            </button>
            <NavLink to="/" onClick={this.handleLogin} className="login">
              Logowanie
            </NavLink>
          </ul>
        </nav>
        <div className="add-wrapper">
          <label htmlFor="name">Wpisz login</label>
          <input
            className="inputLogin"
            name="writtenLogin"
            onChange={this.handleGetLoginAndPassword}
            type="text"
            placeholder="Login.."
          />
          <label htmlFor="password">Wpisz hasło</label>
          <input
            className="inputPass"
            name="writtenPassword"
            onChange={this.handleGetLoginAndPassword}
            type="password"
            placeholder="Hasło.."
          />
          <p className="error-login">Wpisz poprawnie dane</p>
          <button onClick={this.handleShowAddItem} className="admin-login">
            Zaloguj
          </button>
          <button onClick={this.handleCloseLogin} className="closeLogin">
            X
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
