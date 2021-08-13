import React, { Fragment } from "react";

export const Certificats = ({ certificats }) => {
  return (
    <Fragment>
      <ul className="row list-unstyled justify-content-center">
        {certificats.map((certificat) => (
          <li
            className="card shadow col-11 col-md-5 m-2 p-3"
            key={certificat.id}>
            <a href={certificat.link} target="_blank" rel="noreferrer">
              <img
                src={certificat.src}
                className="certificat-img card-img border border-dark"
                alt={certificat.title}
              />
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
