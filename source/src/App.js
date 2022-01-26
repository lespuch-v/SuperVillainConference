import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Speakers from "./components/Speakers";
import SpeakerCards from "./components/SpeakerCard";
import Footer from "./components/Footer";
import data from "./data";
import CurrentTime from "./components/CurrentTime";
import { Link, Switch, Route } from "react-router-dom";
import BugsBree from "./components/BugsFree";
import Snacks from "./components/Snacks";

function App() {
  const [heroData, setHeroData] = useState(data);

  function toggle(id) {
    setHeroData((prevValue) => {
      return prevValue.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  const speakerC = heroData.map((item) => (
    <SpeakerCards
      id={item.id}
      key={item.id}
      name={item.name}
      toggle={toggle}
      img={item.img}
      on={item.on}
      description={item.description}
      occupation={item.occupation}
      location={item.location}
      wiki={item.wiki}
    />
  ));

  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/SuperVillainConference">
          <NavBar />
          <Header />
          <CurrentTime />
          <Speakers />
          <div className="uber-card-holder">{speakerC}</div>
          <Footer />
        </Route>

        <Route exact path="/bugsBree">
          <NavBar />
          <BugsBree />
        </Route>

        <Route exact path="/snacks">
        <NavBar />
          <Snacks />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
