import React, { Component } from "react";
import "../styles/Bargain.css";
import iPhone11Black from "../photos/iPhone11Black.jpg";
import iPhone12White from "../photos/iPhone12White.jpg";
import iPhoneXBlack from "../photos/iPhoneXBlack.jpg";

class Bargain extends Component {
  state = {
    info: [
      {
        id: 0,
        name: "iPhone 11 Black 64GB",
        photo: "iPhone11Black",
        display: "6.1' LCD",
        processor: "Apple Bionic A13",
        system: "iOS 13",
        ram: "4 GB",
        inMemory: "64 GB",
        camera: "Tylne x2 12Mpx, przedni 12Mpx",
        communication: "Wi-Fi, NFC, ligthing, Bluetooth",
        battery: "3110 mAh",
        price: "2999,99",
        newPrice: "2699,99",
      },
      {
        id: 1,
        name: "iPhone 12 White 128GB",
        photo: "iPhone12White",
        display: "6.1' OLED",
        processor: "Apple Bionic A14",
        system: "iOS 14",
        ram: "4 GB",
        inMemory: "128 GB",
        camera: "Tylne x2 12Mpx, przedni 12Mpx",
        communication: "Wi-Fi, NFC, ligthing, 5G, Bluetooth",
        battery: "2775 mAh",
        price: "4999,99",
        newPrice: "4499,99",
      },
      {
        id: 2,
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
  };

  handleCheck = (type) => {
    if (type === "iPhone11Black") {
      return iPhone11Black;
    } else if (type === "iPhone12White") {
      return iPhone12White;
    } else if (type === "iPhoneXBlack") {
      return iPhoneXBlack;
    }
  };

  handleBargainButton = () => {
    alert(
      "Wersja demo strony, pełna wersja dostępna u twórcy strony. Hubert Radziwonka."
    );
  };

  render() {
    return (
      <main className="bargain">
        <section className="bargain-offers">
          {this.state.info.map((elem) => (
            <div key={elem.name} className="one-offer">
              <div className="offer-title">{elem.name}</div>
              <div className="offer-information">
                <div className="item-photo">
                  <img src={this.handleCheck(`${elem.photo}`)} alt="" />
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
                    <div className="bargain-price">
                      <p className="new-price">{elem.newPrice} PLN</p>
                    </div>
                  </div>
                  <div className="rrso">
                    <p className="rrsoFirstP">
                      Wyprzedaż - telefony o <span>10%</span> taniej na lato!
                    </p>
                    <p className="rrsoSecondP">
                      Zniżka dla firm o <span>20%</span>, o szczególy zapytaj
                      nasz zespół!
                    </p>
                  </div>
                  <div className="to-cart">
                    <button
                      onClick={this.handleBargainButton}
                      className="buy-now"
                    >
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

export default Bargain;
