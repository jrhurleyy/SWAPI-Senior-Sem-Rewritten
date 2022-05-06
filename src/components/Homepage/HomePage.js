import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HPCard from "../HomePageCard/homePageCard";
import "./HomePage.css";
const axios = require("axios");

const imageUrl = [
  {name: 'people', url: 'https://drive.google.com/uc?export=download&id=1aAiCdONPcEZ5WBFRUI2TbHqxoEfcXlZZ'},
  {name: 'planets', url: 'https://drive.google.com/uc?export=download&id=14Uu-6hscGRxjA_5v4tz2tFn52SfW8kI3'},
  {name: 'films', url: 'https://drive.google.com/uc?export=download&id=18BBbUYFhWusiDSl70LGbIiINBILJXA6r'},
  {name: 'species', url: 'https://drive.google.com/uc?export=download&id=1tS1qgTj-VJAeyeFR4ODvMO2cIMR6jbLW'},
  {name: 'vehicles', url: 'https://drive.google.com/uc?export=download&id=1qw15OHVGZjQmpfiHbjk_SKXuwqr_4h0C'},
  {name: 'starships', url: 'https://drive.google.com/uc?export=download&id=1zyI971NPq4NXbBiStaRh7YuYc18yWVCI'}
]

class HomePage extends Component {
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
        page: key,
        link: obj[key],
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
      .get("https://swapi.dev/api/")
      .then((response) => {
        this.formatObject(response.data);
      })
  }

  getCardComponent() {
    const { cardInformation } = this.state;
    const cardComp = cardInformation.map((curr) => {
      return <HPCard cardData={curr} title={curr.page} imageUrl={curr.image}/>;
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
            Welcome to the SWAPI (Star Wars API) Graphical Guide. This
            application acts as a visual guide using the open source Star Wars
            API to display information about various entities within Star Wars.
            This includes Characters, Movies, Starships, Planets, and more. In
            order to learn more about a specific category, please use the navigation
            bar above to check out the other pages!
          </p>
        </header>
        <div className="grid-container">
            {cardComponent}
      </div> 
        {/* <Footer /> */}
      </div>
    );
  }
}

export default HomePage;
