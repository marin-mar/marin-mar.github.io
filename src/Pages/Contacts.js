import React, { Fragment } from "react";
import { Trans } from "react-i18next";
import { contacts } from "data.json";

export const Contacts = () => {
  return (
    <Fragment>
      <div className="container pt-5 pb-2 text-center">
        <hr />
        <h2 className="py-3">
          <Trans i18nKey="menuItem4">Contacts</Trans>
        </h2>
        <hr />
        <hr />
        <ul className="row list-unstyled d-flex flex-wrap justify-content-center">
          {contacts.map((contact) => (
            <li className="col col-md-3 h5 my-2 mx-4" key={contact.id}>
              <img
                src={contact.src}
                className="row w-30 mx-auto"
                alt={contact.text}
                width='64'
                height='64'
              />
              <p className="row d-block text-center">
                <Trans i18nKey={contact.text}>{contact.text}</Trans>
              </p>
              <a
                className="row btn w-100 mx-auto btn-outline-dark shadow"
                href={contact.link}
                target="_blank"
                rel="noreferrer">
                <Trans i18nKey={contact.btn}>{contact.btn}</Trans>
              </a>
            </li>
          ))}
        </ul>
        <hr className="mb-5" />
        <div className="alert alert-light" role="alert">
          mailto:marinmar6@yandex.ru
        </div>
        <hr className="mb-5" />
      </div>
    </Fragment>
  );
};
