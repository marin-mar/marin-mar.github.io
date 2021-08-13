import React, { Fragment } from "react";
import { Trans } from "react-i18next";

export const Me = () => {
  return (
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-md-4 col-lg-2 mb-4">
          <img
            className="img-thumbnail"
            src="../Images/me.jpg"
            alt="marinmar"
          />
        </div>
        <div className="col-md-8 col-lg-9 my-auto">
          <p className="px-2 pt-3">
            <Trans i18nKey="AboutMe">
              My name is Marina, I am a frontend web developer. I like to
              implement ideas into a website and learn new technologies. And
              this statement is exactly about me, I can't do it any other way:
            </Trans>
          </p>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p className="h5">
                <Trans i18nKey="Statement">
                  Quality means doing it right when no one is looking.
                </Trans>
              </p>
            </blockquote>
            <figcaption className="blockquote-footer pt-3 h5">
              <cite title="Source Title">
                <Trans i18nKey="StatementAuthor">Henry Ford</Trans>
              </cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </Fragment>
  );
};
