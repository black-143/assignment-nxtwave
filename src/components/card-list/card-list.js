import React from "react";
import "./card-list.css";
import { useNavigate } from "react-router-dom";

export default function CardList({ cardsData }) {
  const navigate = useNavigate();
  const handleClick = (elem) => {
    navigate("/resource-items", { state: { data: elem } });
  };
  return (
    <div className="resource">
      {cardsData.map((elem, index) => {
        return (
          <>
            <div
              id={index}
              className="resource-item"
              onClick={() => handleClick(elem)}
            >
              <div id="resource-item-icon">
                <img src={elem.icon_url} alt="" loading="lazy" />
              </div>
              <p id="card-title">{elem.title}</p>
              <p id="card-category">{elem.category}</p>
              <a
                href={elem.link}
                style={{ "textDecoration": "none" }}
                target="_blank"
              >
                {elem.link}
              </a>
              <p id="card-description">{elem.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
