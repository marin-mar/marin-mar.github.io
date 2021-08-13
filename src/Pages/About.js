import React, { Fragment } from "react";
import { Trans } from "react-i18next";
import { Me } from "Components/Me";
import { Skills } from "Components/Skills";
import { Certificats } from "Components/Certificats";
import { certificats } from "data.json";
import { skills } from "data.json";

export const About = () => {
  return (
    <Fragment>
      <div className="container pt-5 pb-2 text-center">
        <hr />
        <h2 className="py-3">
          <Trans i18nKey="menuItem3">About</Trans>
        </h2>
        <hr />
        <div className="accordion-flush" id="accordion">
          <div className="accordion-item m-3 shadow">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne">
                <Trans i18nKey="AboutTitle1">This is me</Trans>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion">
              <div className="accordion-body">
                <Me />
              </div>
            </div>
          </div>
          <div className="accordion-item m-3 shadow">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                <Trans i18nKey="AboutTitle2">Skills</Trans>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion">
              <div className="accordion-body">
                <Skills skills={skills} />
              </div>
            </div>
          </div>
          <div className="accordion-item m-3 shadow">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                <Trans i18nKey="AboutTitle3">Certificats</Trans>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion">
              <div className="accordion-body">
                <Certificats certificats={certificats} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
    </Fragment>
  );
};
