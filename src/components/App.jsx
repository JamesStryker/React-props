import React from "react";
import Card from "./card";

function App() {
  return (
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789<"
      email="b@beyonce.com"
    />
  );
}

export default App;
