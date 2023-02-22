import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  

  return (
    <div className="App">
      <Header/>
      <Body></Body>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
