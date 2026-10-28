import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // idx > 0 means there is a previous page inside this app
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/"); // opened directly / reloaded: go home instead of doing nothing
    }
  };

  return (
    <div className="back-button-slot">
      <button
        type="button"
        className="back-button"
        onClick={goBack}
        aria-label="Go back to previous page"
      >
        <FaArrowLeft className="back-button-icon" aria-hidden="true" />
        <span>Back</span>
      </button>
    </div>
  );
};

export default BackButton;