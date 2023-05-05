import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Hey, Click on the button to open the modal</h1>
      <button
        className="btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default App;
