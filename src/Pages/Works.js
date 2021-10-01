import React, { Fragment } from "react";
import { Trans } from "react-i18next";
import { Cards } from "Components/Cards";
import { works } from "../data.json";

export const Works = () => {
  return (
    <Fragment>
      <div className="container pt-5 pb-2 text-center">
        <hr />
        <h2 className="py-3">
          <Trans i18nKey="menuItem2">Works</Trans>
        </h2>
        <hr />
        <Cards cards={works} />
        <hr className="mb-5" />
      </div>
    </Fragment>
  );
};
