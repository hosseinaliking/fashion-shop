import React, { useState } from "react";

//* Pages *//
import Home from "./Pages/Home";

//* Components *//
import Header from "./Components/Header/Header";
import SearchModal from "./Components/SearchModal/SearchModal";


const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <Header setShowModal={setShowModal} />
        <Home />
      </div>
      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default App;
