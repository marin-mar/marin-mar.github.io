import React, { Fragment } from "react";
import { Jumbotron } from "Components/Jumbotron";

export const Home = () => {
  return (
    <Fragment>
      <main className="main">
        <div className="mask">
          <Jumbotron />
        </div>
      </main>
    </Fragment>
  );
};
