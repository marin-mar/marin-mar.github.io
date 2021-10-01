import React, { useState, Fragment } from "react";
import { Trans } from "react-i18next";

export const Cards = ({ cards }) => {
  const [maxRange, setMaxRange] = useState(2);
  const [disabledBtn, setdisabledBtn] = useState(false);

  const loadMore = () => {
    setMaxRange((prevRange) => prevRange + 2);
    if (maxRange >= cards.length) {
      setdisabledBtn(true);
    }
  };
  const loadAll = () => {
    setMaxRange(cards.length);
    setdisabledBtn(true);
  };

  const cardComponent = cards.slice(0, maxRange).map((card) => {
    return (
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
            <a className="btn btn-outline-secondary btn-lg mx-2 text-dark" href={card.link} target="_blank" rel="noreferrer">
              <Trans i18nKey="cardBtn">View the website</Trans>
            </a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <ul className="row row-cols-1 row-cols-md-2 g-4 list-unstyled">{cardComponent}</ul>
      <div className="cards__btns d-flex justify-content-center">
        <button
          className="btn btn-outline-dark btn-lg m-3"
          onClick={loadMore}
          disabled={disabledBtn}>
          <Trans i18nKey="See more">See more</Trans>
        </button>
        <button
          className="btn btn-outline-dark btn-lg m-3"
          onClick={loadAll}
          disabled={disabledBtn}>
          <Trans i18nKey="See All">See All</Trans>
        </button>
      </div>
    </Fragment>
  );
};
