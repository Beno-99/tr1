import React from "react";

import Carosel from "./components/carosel/carosel.jsx";
import Carosel2 from './components/carosel2/main2.jsx';
import Carosel3 from './components/carosel3/main3.jsx';
import Carosel4 from './components/carosel4/main4.jsx';
import Carosel5 from './components/carosel5/main5.jsx';
import Carosel6 from './components/carosel6/main6.jsx';
import Rate from "./components/RatePart/Rate.jsx";
import Inbox from "./components/inbox/inbox.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from './components/footer/footer.jsx';


const App = ()=> {
  return (
    <>
      <Carosel/>
      <Carosel2/>
      <Carosel3/>
      <Rate/>
      <Carosel4/>
      <Carosel5/>
      <Carosel6/>
      <Rate/>
      <Inbox/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
