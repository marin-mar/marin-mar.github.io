import React, { Fragment } from "react";
import { Trans } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Jumbotron = () => {
  return (
    <Fragment>
      <div className="p-5 mb-4 mx-auto bg-transparent rounded-3 text-center text-white">
        <div className="container-fluid py-5">
          <h1 className="mt-5">
            <Trans i18nKey="headerText1">
              Welcome to Personal Portfolio Webpage
            </Trans>
          </h1>
          <p className="fs-4">
            <Trans i18nKey="headerText2">of web developer marinmar</Trans>
          </p>
          <div className="d-flex justify-content-center flex-column flex-md-row">
            <NavLink className="nav-link" to="/works">
              <button
                className="btn btn-outline-secondary btn-lg mx-2 text-white"
                type="button">
                <Trans i18nKey="menuItem2">Works</Trans>
              </button>
            </NavLink>
            <NavLink className="nav-link" to="/about">
              <button
                className="btn btn-outline-secondary btn-lg mx-2 text-white"
                type="button">
                <Trans i18nKey="menuItem3">About</Trans>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
