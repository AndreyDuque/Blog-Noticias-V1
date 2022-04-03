import React from "react";
import Container from "./components/container/Container";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <>
      <Menu/>
      <div className="w3-main" style={{marginLeft:"300px"}}>
        <Header/>
        <Container/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
