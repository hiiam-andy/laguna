import React from "react";
import Offer from "../components/Offer/Offer";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Advantage from "../components/Advantage/Advantage";
import Placement from "../components/Placement/Placement";
import Contacts from "../components/Contacts/Contacts";

export default function MainPage() {
  return (
    <div>
      <Offer />
      <About />
      <Service />
      <Advantage />
      <Placement />
      <Contacts />
    </div>
  );
}
