import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "Pages/Home";
import { Works } from "Pages/Works";
import { About } from "Pages/About";
import { Contacts } from "Pages/Contacts";
import { Navbar } from "Components/Navbar";
import { Footer } from "Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/works"} component={Works} />
        <Route path={"/about"} component={About} />
        <Route path={"/contacts"} component={Contacts} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
