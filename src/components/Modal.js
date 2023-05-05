import React from "react";
import "./Modal.css";
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            type=""
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
          <h1>Are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>
            The next page is of ASITY! You should definitely go forward, you
            will enjoy it.
          </p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
