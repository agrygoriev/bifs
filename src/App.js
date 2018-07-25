import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/pix_style.css";
import "./App.css";

import NavigationBar from "./containers/nav-bar";
import FooterBlock from "./containers/footer";
import MainSection from "./containers/main-section";
class App extends Component {
  render() {
    const contacts = {
      heading: "GIVE US A SHOUT",
      subheading:
        "We are ready to lead you into the future of personal finance",
      street: "Hagalil 43,",
      city: "Haifa,",
      postcode: "32687",
      country: "Israel"
    };
    return (
      <BrowserRouter>
        <div>
          <header className="navigation">
            <NavigationBar />
          </header>
          <MainSection contacts={contacts} {...contacts} />
          <FooterBlock
            heading="Contact Us"
            copyright="Copyright © 2018 Bringing Ideas Financial Solutions. All Rights Reserved"
            street={contacts.street}
            city={contacts.city}
            postcode={contacts.postcode}
            country={contacts.country}
            textprivacy="Privacy Policy"
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
