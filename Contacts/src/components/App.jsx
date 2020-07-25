import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://vignette.wikia.nocookie.net/pkmnshuffle/images/7/77/Pikachu.png/revision/latest/scale-to-width-down/340?cb=20170407192412" />

      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
