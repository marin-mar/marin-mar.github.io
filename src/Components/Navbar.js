import React, { Fragment, Suspense } from "react";
import { NavLink } from "react-router-dom";
import i18n from "i18next";
import { Trans } from "react-i18next";

export const LanguageChange = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="d-fluid justify-content-space-between">
      <button
        type="button"
        className="btn btn-outline-dark mx-2 btn-sm"
        onClick={() => changeLanguage("en")}>
        En
      </button>
      <button
        type="button"
        className="btn btn-outline-dark mx-2 btn-sm"
        onClick={() => changeLanguage("ru")}>
        Ru
      </button>
    </div>
  );
};

export const Navbar = () => {
  return (
    <Suspense fallback="loading">
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              marinmar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>
                    <Trans i18nKey="menuItem1">Home</Trans>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/works">
                    <Trans i18nKey="menuItem2">Works</Trans>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    <Trans i18nKey="menuItem3">About</Trans>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacts">
                    <Trans i18nKey="menuItem4">Contacts</Trans>
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* TODO! buttons don't work, only LanguageDetector*/}
            {/* <LanguageChange /> */}
          </div>
        </nav>
      </Fragment>
    </Suspense>
  );
};
