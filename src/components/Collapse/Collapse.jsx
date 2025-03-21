import React, { useState } from "react";
import "./Collapse.css"; 
import arrowUp from "../../assets/arrowup.png"; 

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <img
          src={arrowUp}
          alt="Flèche"
          className={`arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      <div className={`collapse-content ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
