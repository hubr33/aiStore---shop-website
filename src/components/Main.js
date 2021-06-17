import React, { Component } from "react";
import "../styles/Main.css";
import iPhone11Black from "../photos/iPhone11Black.jpg";
import iPhone12White from "../photos/iPhone12White.jpg";
import iPhoneXBlack from "../photos/iPhoneXBlack.jpg";

class Main extends Component {
  state = {
    numberOfSlide: 0,
    uniqID: 0,
    orderedItemName: "",
    orderedItemPrice: "",
    orderedItemPriceRest: "",
    orderName: "",
    orderCity: "",
    orderStreet: "",
    orderEmail: "",
    orderPhoneNumber: "",
    orderDelivery: "",
    slider: [
      "Codziennie nowe okazje!",
      "Najtańsze smartfony!",
      "Masz pytanie? Napisz!",
    ],
    addId: 0,
    addName: "",
    addPhoto: "",
    addDisplay: "",
    addProcessor: "",
    addSystem: "",
    addRam: "",
    addInMemory: "",
    addCamera: "",
    addCommunication: "",
    addBattery: "",
    addPrice: "",
    info: [
      {
        id: 0,
        name: "iPhone X Black 64GB",
        photo: "iPhoneXBlack",
        display: "5.8' OLED",
        processor: "Apple Bionic A11",
        system: "iOS 11",
        ram: "3 GB",
        inMemory: "64 GB",
        camera: "Tylne x2 12Mpx, przedni 7Mpx",
        communication: "Wi-Fi, NFC, ligthing, 4G LTE, Bluetooth",
        battery: "2716 mAh",
        price: "2499,99",
        newPrice: "2249,99",
      },
    ],
    addedToCartItem: [],
  };

  handleChangeText = () => {
    const cc = document.querySelector(".offer-slider p");
    setInterval(() => {
      if (this.state.numberOfSlide === 2) {
        cc.textContent = this.state.slider[this.state.numberOfSlide];
        this.setState({ numberOfSlide: 0 });
      } else {
        cc.textContent = this.state.slider[this.state.numberOfSlide];
        this.setState({ numberOfSlide: this.state.numberOfSlide + 1 });
      }
    }, 5000);
  };

  componentDidMount() {
    const cc = document.querySelector(".offer-slider p");
    cc.textContent = "";
    this.handleChangeText();
  }

  handleNewItemInfo = (e) => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleGetSelectedValue = () => {
    const select = document.getElementById("selectPhoto");
    const selectedValue = select.options[select.selectedIndex].value;
    this.setState({ addPhoto: selectedValue });
  };

  handleAddNewItem = () => {
    const allInputs = document.querySelectorAll("main input");
    const addSelect = document.getElementById("selectPhoto");
    if (
      this.state.addName !== "" &&
      this.state.addPhoto !== "" &&
      this.state.addDisplay !== "" &&
      this.state.addProcessor !== "" &&
      this.state.addSystem !== "" &&
      this.state.addRam !== "" &&
      this.state.addInMemory !== "" &&
      this.state.addCamera !== "" &&
      this.state.addCommunication !== "" &&
      this.state.addBattery !== "" &&
      this.state.addPrice
    ) {
      this.state.info.push({
        id: this.state.addId,
        name: this.state.addName,
        photo: this.state.addPhoto,
        display: this.state.addDisplay,
        processor: this.state.addProcessor,
        system: this.state.addSystem,
        ram: this.state.addRam,
        inMemory: this.state.addInMemory,
        camera: this.state.addCamera,
        communication: this.state.addCommunication,
        battery: this.state.addBattery,
        price: this.state.addPrice,
      });
      this.setState({
        addName: "",
        addPhoto: "",
        addDisplay: "",
        addProcessor: "",
        addSystem: "",
        addRam: "",
        addInMemory: "",
        addCamera: "",
        addCommunication: "",
        addBattery: "",
        addPrice: "",
      });
      this.setState({ addId: this.state.addId + 1 });
      document.querySelector(".form-shadow").classList.remove("open");
      document.querySelector("section").classList.remove("roll");
      addSelect.classList.remove("error");
      addSelect.value = "";
      allInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error");
      });
    } else {
      addSelect.classList.add("error");
      allInputs.forEach((input) => {
        if (input.value === "") {
          input.classList.add("error");
        } else if (input.value !== "") {
          input.classList.remove("error");
        }
      });
    }
  };

  handleCloseCreateItem = () => {
    document.querySelector("select").value = "";
    document.querySelector("select").classList.remove("error");
    const allInputs = document.querySelectorAll("main input");
    allInputs.forEach((input) => {
      input.value = "";
      input.classList.remove("error");
    });
    document.querySelector(".form-shadow").classList.remove("open");
    document.querySelector("section").classList.remove("roll");
    this.setState({
      addName: "",
      addPhoto: "",
      addDisplay: "",
      addProcessor: "",
      addSystem: "",
      addRam: "",
      addInMemory: "",
      addCamera: "",
      addCommunication: "",
      addBattery: "",
      addPrice: "",
    });
  };

  handlePhoto = (type) => {
    if (type === "iPhone11Black") {
      return iPhone11Black;
    } else if (type === "iPhone12White") {
      return iPhone12White;
    } else if (type === "iPhoneXBlack") {
      return iPhoneXBlack;
    }
  };

  handleAddToCart = (e) => {
    const item = e.target.closest(".buy-zone");
    const price = item.querySelector(".price").textContent;
    const priceRest = item.querySelector(".price-rest").textContent.slice(0, 2);
    const selectedItem = item.dataset.option;
    this.state.addedToCartItem.push({
      item: selectedItem,
      price: price,
      priceRest: priceRest,
    });
    this.setState({ uniqID: this.state.uniqID + 1 });
    document.querySelector(".addedToCartAlert").classList.add("add");
    setTimeout(() => {
      document.querySelector(".addedToCartAlert").classList.remove("add");
    }, 2000);
  };

  handleOrderMenuClose = () => {
    const orderInputs = document.querySelectorAll(".orderItem input");
    const orderSelect = document.querySelector(".orderItem select");
    this.setState({
      orderedItemName: "",
      orderedItemPrice: "",
      orderedItemPriceRest: "",
      orderName: "",
      orderCity: "",
      orderSelect: "",
      orderEmail: "",
      orderPhoneNumber: "",
      orderDelivery: "",
    });
    orderInputs.forEach((input) => {
      input.value = "";
      input.classList.remove("error");
    });
    orderSelect.classList.remove("error");
    orderSelect.value = "";
    document.querySelector(".orderShadow").classList.remove("open");
  };

  handleOrderMenuOpen = () => {
    document.querySelector(".orderShadow").classList.add("open");
  };

  handleOrderInputData = (evt) => {
    let name = evt.target.name;
    this.setState({ [name]: evt.target.value });
  };

  handleOrderMenuForm = () => {
    const orderInputs = document.querySelectorAll(".orderItem input");
    const orderSelect = document.querySelector(".orderItem select");
    if (
      this.state.orderName !== "" &&
      this.state.orderCity !== "" &&
      this.state.orderStreet !== "" &&
      this.state.orderEmail !== "" &&
      this.state.orderPhoneNumber !== "" &&
      this.state.orderDelivery !== ""
    ) {
      document.querySelector(".successfulOrder").classList.add("sent");
      setTimeout(() => {
        document.querySelector(".successfulOrder").classList.remove("sent");
      }, 3000);
      document.querySelector(".orderShadow").classList.remove("open");
      orderInputs.forEach((input) => {
        input.value = "";
        input.classList.remove("error");
        orderSelect.classList.remove("error");
      });
      orderSelect.value = "";
      this.setState({
        orderName: "",
        orderCity: "",
        orderSelect: "",
        orderEmail: "",
        orderPhoneNumber: "",
        orderDelivery: "",
      });
    } else {
      orderInputs.forEach((input) => {
        if (input.value === "") {
          input.classList.add("error");
        }
        if (orderSelect.value === "") {
          orderSelect.classList.add("error");
        }
      });
    }
  };

  render() {
    return (
      <main>
        <div className="successfulOrder">
          <p>Dziękujemy za zakup w naszym sklepie!</p>
        </div>
        <div className="orderShadow">
          <div className="orderItem">
            <h3>{this.state.orderedItemName}</h3>
            <label htmlFor="name">Imię i nazwisko</label>
            <input
              onChange={this.handleOrderInputData}
              name="orderName"
              type="text"
              placeholder="Wpisz imię i nazwisko"
            />
            <label htmlFor="city">Miasto</label>
            <input
              onChange={this.handleOrderInputData}
              name="orderCity"
              type="text"
              placeholder="Wpisz nazwę swojego miasta"
            />
            <label htmlFor="address">Ulica i numer domu/mieszkania</label>
            <input
              onChange={this.handleOrderInputData}
              name="orderStreet"
              type="text"
              placeholder="Wpisz ulice i numer domu/mieszkania"
            />
            <label htmlFor="email">E-mail</label>
            <input
              onChange={this.handleOrderInputData}
              name="orderEmail"
              type="email"
              placeholder="Wpisz swoj e-mail"
            />
            <label htmlFor="number">Numer telefonu kontaktowego</label>
            <input
              onChange={this.handleOrderInputData}
              name="orderPhoneNumber"
              type="number"
              placeholder="Wpisz swój numer telefonu"
            />
            <label htmlFor="deliverForm">Wybierz dostawcę </label>
            <select
              onChange={this.handleOrderInputData}
              name="orderDelivery"
              id="delivery"
            >
              <option value="" disabled selected>
                -- Wybierz dostawę --
              </option>
              <option value="DHL">DHL - +0zł</option>
              <option value="inpost">InPost - +7zł</option>
              <option value="DPD">DPD - +10zł</option>
              <option value="fedex">FedEX - +5zł</option>
            </select>
            <div className="orderPrice">
              <div className="orderItemPrice">
                <p>Cena przedmiotu:</p>
                <span>
                  {this.state.orderedItemPrice},
                  {this.state.orderedItemPriceRest} PLN
                </span>
              </div>
              <div className="orderItemAllCosts">
                <p>Łączna cena:</p>
                <span> PLN</span>
              </div>
            </div>
            <div className="orderButtons">
              <button onClick={this.handleOrderMenuForm} className="sendOrder">
                Złóż zamówienie
              </button>
              <button
                onClick={this.handleOrderMenuClose}
                className="cancelOrder"
              >
                Anuluj zamówienie
              </button>
            </div>
          </div>
        </div>
        <div className="addedToCartAlert">
          <p>Dodano przedmiot do koszyka</p>
        </div>
        <div className="cart-container">
          {this.state.addedToCartItem.map((i) => (
            <div key={i.item + this.state.uniqID} className="cartItem">
              <div className="cartPicture">
                <img src={iPhone11Black} alt="" />
              </div>
              <div className="cartInfo">
                <h2>Wybrałeś</h2>
                <p className="orderedItemName">{i.item}</p>
                <p className="orderedItemPrice">
                  {i.price},{i.priceRest}PLN
                </p>
              </div>
              <button
                value={i.item}
                data-option={i.price}
                data-sel={i.priceRest}
                onClick={(e) => {
                  const itemN = e.target.value;
                  const itemP = e.target.dataset.option;
                  const itemPR = e.target.dataset.sel;
                  this.handleOrderMenuOpen();
                  this.setState({
                    orderedItemName: itemN,
                    orderedItemPrice: itemP,
                    orderedItemPriceRest: itemPR,
                  });
                  document
                    .querySelector(".cart-container")
                    .classList.toggle("active");
                }}
                className="cartBuyBtn"
              >
                Kup teraz
              </button>
            </div>
          ))}
        </div>
        <div className="form-shadow">
          <div className="form-area">
            <button onClick={this.handleCloseCreateItem} className="closeForm">
              X
            </button>
            <h2>Dodaj nowy telefon do sprzedaży</h2>
            <label htmlFor="name">Nazwa przedmiotu</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addName"
              type="text"
              placeholder="wpisz nazwę przedmiotu"
            />
            <label htmlFor="display">Wyświetlacz</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addDisplay"
              type="text"
              placeholder="wpisz informacje o wyświetlaczu"
            />
            <label htmlFor="processor">Procesor</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addProcessor"
              type="text"
              placeholder="wpisz informacje o procesorze"
            />
            <label htmlFor="system">Wersja systemu</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addSystem"
              type="text"
              placeholder="wpisz informacje o wersji systemu"
            />
            <label htmlFor="ram">Pamięć RAM</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addRam"
              type="text"
              placeholder="wpisz informacje o ilości pamięci ram w GB"
            />
            <label htmlFor="inMemory">Pamięć wbudowana</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addInMemory"
              type="text"
              placeholder="wpisz informacje o ilości pamięci wbudowane w GB"
            />
            <label htmlFor="camera">Aparat</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addCamera"
              type="text"
              placeholder="wpisz informacje o ilości aparatów oraz ile mają Mpx"
            />
            <label htmlFor="communication">Komunikacja</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addCommunication"
              type="text"
              placeholder="wpisz informacje o łącznościach telefonu"
            />
            <label htmlFor="battery">Pojemność akumulatora</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addBattery"
              type="text"
              placeholder="wpisz informacje o pojemności baterii w mAh"
            />
            <label htmlFor="price">Cena w PLN</label>
            <input
              onChange={this.handleNewItemInfo}
              name="addPrice"
              type="text"
              placeholder="wpisz cenę produktu łącznie z kwotą po przecinku"
            />
            <select
              onChange={this.handleGetSelectedValue}
              name="photo"
              id="selectPhoto"
            >
              <option value="" selected disabled>
                -- Wybierz zdjęcie telefonu --
              </option>
              <option value="iPhone11Black">iPhone 11 - BLACK</option>
              <option value="iPhone12White">iPhone 12 - WHITE</option>
              <option value="iPhoneXBlack">iPhone X - BLACK</option>
            </select>
            <button
              onClick={this.handleAddNewItem}
              className="acceptAndAddItem"
            >
              Akceptuj i dodaj rzecz
            </button>
          </div>
        </div>
        <aside>
          <div className="shop-info">
            <div className="open-hours">
              <h2>Godziny otwarcia</h2>
              <h3>Pon-pt</h3>
              <p>8:00-20:00</p>
              <h3>Sobota</h3>
              <p>8:00-18:00</p>
              <h3>Niedziela</h3>
              <p>Nieczynne</p>
              <h3>Adres</h3>
              <p>ul. Partyzantów 5, Warszawa</p>
              <h3>Reklamacje / Kontakt</h3>
              <p>Tel.: 777 777 777</p>
              <p>E-mail: ajstore@as.com</p>
            </div>
            <div className="offer-slider">
              <p></p>
            </div>
          </div>
        </aside>
        <section>
          {this.state.info.map((elem) => (
            <div key={elem.name} className="one-offer">
              <div className="offer-title">{elem.name}</div>
              <div className="offer-information">
                <div className="item-photo">
                  <img src={this.handlePhoto(`${elem.photo}`)} alt="" />
                </div>
                <div className="item-information">
                  <div>
                    Wyświetlacz: <p>{elem.display}</p>
                  </div>
                  <div>
                    Procesor: <p>{elem.processor}</p>
                  </div>
                  <div>
                    Wersja systemu: <p>{elem.system}</p>
                  </div>
                  <div>
                    Pamięć RAM: <p>{elem.ram}</p>
                  </div>
                  <div>
                    Pamięć wbudowana: <p>{elem.inMemory}</p>
                  </div>
                  <div>
                    Aparat: <p>{elem.camera}</p>
                  </div>
                  <div>
                    Komunikacja: <p>{elem.communication}</p>
                  </div>
                  <div>
                    Pojemność akumulatora: <p>{elem.battery}</p>
                  </div>
                </div>
                <div data-option={elem.name} className="buy-zone">
                  <div className="price-area">
                    <p className="price">{elem.price.slice(0, 4)}</p>
                    <div className="price-rest">
                      <p className="rest">{elem.price.slice(5, 7)}</p>
                      <p className="price-value">PLN</p>
                    </div>
                  </div>
                  <div className="rrso">
                    <p>Możliwość kupna przedmiotu w ratach!</p>
                    <p>
                      {Number(elem.price.slice(0, 4)) / 10}0 X 10 rat{" "}
                      <span>0%</span>
                    </p>
                    <p>
                      Przez <span>6 miesięcy nic</span> nie płacisz!
                    </p>
                  </div>
                  <div className="to-cart">
                    <button onClick={this.handleAddToCart} className="buy-now">
                      Dodaj do koszyka
                    </button>
                    <div className="call-to-shop">
                      <p>Lub zadzwoń telefonicznie na numer</p>
                      <p>
                        {" "}
                        <span style={{ color: "blue", fontWeight: "bold" }}>
                          777 777 777{" "}
                        </span>
                        dostępny 8:00-18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
}

export default Main;
