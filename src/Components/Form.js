import React, { Fragment } from "react";
import { Trans } from "react-i18next";

export const Form = () => {
  return (
    <Fragment>
      {/* <form action="http://formspree.io/marinmar6@yandex.ru">
          <input type="email" name="_replyto" />
          <textarea name="body" />
          <input type="submit" value="Send" />
        </form> */}
      <form
        className="p-2 shadow"
        action="http://formspree.io/marinmar6@yandex.ru">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <Trans i18nKey="FormEmail">Enter your Email</Trans>
          </label>
          <input
            type="email"
            name="_replyto"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            <Trans i18nKey="FormText">Enter your message</Trans>
          </label>
          <textarea
            name="body"
            className="form-control"
            id="text"
            placeholder="Text"
          />
        </div>
        <button
          type="submit"
          value="Send"
          className="btn btn-outline-dark btn-lg">
          <Trans i18nKey="FormBtn">Send</Trans>
        </button>
      </form>
    </Fragment>
  );
};
