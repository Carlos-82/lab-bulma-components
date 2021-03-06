import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./navbar/Navbar.js";
import FormField from "./formfield/FormField.js";
import CoolButton from "./coolbutton/CoolButton.js";
import Container from "./container/Container";

const App = () => {
  return (
    <div>
      <Navbar className="has-navbar-fixed-top" />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <div className="buttons">
        <CoolButton
          label="Button 1"
          className="button is-rounded my-class is-Small is-Danger"
        />
        <CoolButton label="Button 2" className="button is-Small is-Success" />
      </div>
      <Container />
    </div>
  );
};

export default App;
