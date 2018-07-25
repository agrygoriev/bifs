import React from "react";
import WeightsIcon from "../assets/img/weights.svg";
const RelativeContentBlock1 = props => {
  return (
    <section className="relative-content-1">
      <div className="pix_section gray-bg pix-relative highlight-section pix-no-margin-bottom">
        <div className="highlight-right pix-showcase-highlight-1" />
        <div className="container highlight-gray-mobile">
          <div className="row">
            <div className="col-md-6 col-xs-12 col-sm-12 column ui-droppable">
              <div className="pix-content pix-padding-v-130 text-center">
                <div className="pix-margin-bottom-20">
                  <img
                    className="icon-weights"
                    src={WeightsIcon}
                    alt="weights-icon"
                  />
                </div>
                <h3 className="pix-black-gray-dark pix-no-margin-top secondary-font">
                  Start by spending less than you earn every month
                </h3>
                <p className="pix-gray big-text pix-margin-bottom-30">
                  Is saving money easy? From a distance, it certainly appears to
                  be. But, when it comes down to it, it’s pretty difficult –
                  especially when you don’t have a stellar income.
                </p>
                <p className="pix-gray big-text pix-margin-bottom-30">
                  You already know you need to save money for the future. You
                  need to save money for retirement, for an emergency, for your
                  kids’ college education. The list goes on and on. And, in the
                  back of your mind, you know these are real expenses that will
                  most likely get worse over the course of your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelativeContentBlock1;
