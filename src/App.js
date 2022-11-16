import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Gallery, Testimonial, Header } from "./container";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Gallery />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
