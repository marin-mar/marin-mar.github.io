import React, { Fragment } from "react";

export const Footer = () => {
  return (
    <Fragment>
      <footer className="container-fluid bg-gray fixed-bottom bg-light bg-gradient bg-opacity-90 d-flex flex-wrap flex-col flex-md-row justify-content-center">
        <p className="text-dark text-center pt-3 pb-1">
          &copy; 2021 marinmar &copy;
        </p>
      </footer>
    </Fragment>
  );
};
