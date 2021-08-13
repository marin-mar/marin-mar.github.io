import React from "react";
import { Trans } from "react-i18next";

export const Cards = ({ cards }) => {
  return (
    <ul className="row row-cols-1 row-cols-md-2 g-4 list-unstyled">
      {cards.map((card) => (
        <li className="col d-flex align-items-stretch" key={card.id}>
          <div className="card shadow d-flex align-items-stretch">
            <img src={card.src} className="card-img-top" alt={card.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title flex-grow-1">
                <Trans i18nKey={card.title}>{card.title}</Trans>
              </h5>
              <p className="card-text">
                <Trans i18nKey={card.text}>{card.text}</Trans>
              </p>
              <a
                className="btn btn-outline-secondary btn-lg mx-2 text-dark"
                href={card.link}
                target="_blank"
                rel="noreferrer">
                <Trans i18nKey="cardBtn">View the website</Trans>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
