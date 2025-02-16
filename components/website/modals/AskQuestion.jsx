import React from "react";

const AskQuestion = () => {
  return (
    <div
      className="modal modalCentered fade tf-product-modal modal-part-content"
      id="ask_question"
      style={{ zIndex: 1060, display: "none" }}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <div className="demo-title">Ask a question</div>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="overflow-y-auto">
            <form className="">
              <fieldset className="">
                <label>Name *</label>
                <input
                  type="text"
                  placeholder=""
                  className=""
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
              <fieldset className="">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder=""
                  className=""
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
              <fieldset className="">
                <label>Phone number</label>
                <input
                  type="number"
                  placeholder=""
                  className=""
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
              <fieldset className="">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder=""
                  className=""
                  tabIndex={2}
                  aria-required="true"
                  required=""
                  defaultValue={""}
                />
              </fieldset>
              <button type="submit" className="btn-style-2 w-100">
                <span className="text">Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
