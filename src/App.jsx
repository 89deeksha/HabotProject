import { useState } from "react";

// import './App.css'
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Habotlocations from "./component/Habotlocations";
import Youtube from "./component/Youtube";
import Belowytube from "./component/belowytube";
import Support from "./component/Support";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>
      <Habotlocations></Habotlocations>
      <Youtube></Youtube>
      <Belowytube></Belowytube>
      <Support></Support>
      <Footer></Footer>
    </>
  );
}

export default App;
