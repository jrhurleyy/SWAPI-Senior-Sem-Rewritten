import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.css";

class HomePage extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <header className="App-header">
          <Header />
          <p className="p">
            Welcome to the SWAPI (Star Wars API) Web Application. This
            application will allow you to view your favorite Star Wars
            characters and information about the character such as...
            <pre>
              <li>Attributes (Height, Weight, ETC.)</li>
              <li>Movie Cameos</li>
            </pre>
          </p>
        </header>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
