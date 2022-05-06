import React, { Component } from "react";
import Header from "../Header/Header";
import PeopleCard from "./PeopleCard";
import "./People.css";
const axios = require("axios");

const imageUrl = [
  {name: 'Luke Skywalker', url: 'https://drive.google.com/uc?export=download&id=16DFw8GOQ-nMdArXqfg0XcTZ0gdePjuC4'},
  {name: 'C-3PO', url: 'https://drive.google.com/uc?export=download&id=1aAiCdONPcEZ5WBFRUI2TbHqxoEfcXlZZ'},
  {name: 'R2-D2', url: 'https://drive.google.com/uc?export=download&id=1KDDH5Mct_NKyqXuJiX6b5dtha8H5pemu'},
  {name: 'Darth Vader', url: 'https://drive.google.com/uc?export=download&id=1Sea2WkOQvMUTBDiaWzCWGEqD-oFKDONG'},
  {name: 'Leia Organa', url: 'https://drive.google.com/uc?export=download&id=1AyTzmtB7L5M3KZor_t7zJ67czn4VfHm3'},
  {name: 'Owen Lars', url: 'https://drive.google.com/uc?export=download&id=1OOd8uC2fPAaeVdSX6L2sr_ZECNkcxHWT'},
  {name: 'Beru Whitesun lars', url: 'https://drive.google.com/uc?export=download&id=1h0HbHa9vClbGB9sCS4Sk3xBRmYoyoe3L'},
  {name: 'R5-D4', url: 'https://drive.google.com/uc?export=download&id=1TM2vQAX13coJgSAcg_4jm6VK9SmopCNX'},
  {name: 'Biggs Darklighter', url: 'https://drive.google.com/uc?export=download&id=171qq_lM8dDjFKhz_igaLRmt7c8WP5kZ-'},
  {name: 'Obi-Wan Kenobi', url: 'https://drive.google.com/uc?export=download&id=1FBbYFQkF2t4CGmJYN50UlgrQWFVDs1Rd'},
]

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInformation: [],
      cardComponent: [],
      selectedCard: [],
    };

    this.getCardInfo = this.getCardInfo.bind(this);
    this.formatObject = this.formatObject.bind(this);
    this.getCardComponent = this.getCardComponent.bind(this);
  }

  componentDidMount() {
    this.getCardInfo();
  }

  formatObject(obj) {
    const res = [];
    const keys = Object.keys(obj);
    keys.forEach((key, index) => {
      res.push({
        page: obj[key].name,
        characterInfo: obj[key],
        image: imageUrl[index].url
      });
    });
    this.setState({
      cardInformation: res,
    })
    this.getCardComponent()
    return;
  }

  getCardInfo() {
    return axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        this.formatObject(response.data.results);
      })
  }

  getCardComponent() {
    const { cardInformation } = this.state;
    const cardComp = cardInformation.map((curr) => {
      return <PeopleCard cardData={curr.characterInfo} title={curr.page} imageUrl={curr.image}/>;
    });

    this.setState({
      cardComponent: cardComp,
    });
  }

  render() {
    const {cardComponent} = this.state;
    return (
      <div>
        <header className="App-header">
          <Header />
          <p className="p">
            Welcome to the People Page. Here you can find information about your favorite characters, and some of their attributes. 
          </p>
        </header>
        <div className="people-grid-container">
            {cardComponent}
      </div> 
        {/* <Footer /> */}
      </div>
    );
  }
}

export default People;
