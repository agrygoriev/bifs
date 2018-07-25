import React from "react";
import ExperiencePicture from "../assets/img/Experiences-Cis.png";

const RelativeContentBlock2 = props => {
  return (
    <section className="relative-content-2">
      <div className="pix_section pix-padding">
        <div className="container">
          <div className="row pix-padding-v-30">
            <div className="col-xs-12 col-sm-6 column ui-droppable col-md-7">
              <div className="pix-content pix-padding-top-60">
                <h2 className="pix-black-gray-dark pix-no-margin-top secondary-font">
                  50 Personal Finance Habits Everyone Should Follow
                </h2>
                <p className="pix-black-gray-light big-text pix-margin-bottom-20">
                  From time to time we bring you posts from our partners that
                  may not be new but contain advice that bears repeating. Look
                  for these classics on the weekends.
                </p>
              </div>
            </div>
            <div className="col-xs-12 text-center col-sm-6 column ui-droppable col-md-5">
              <div className="pix-content">
                <img
                  src={ExperiencePicture}
                  className="img-responsive"
                  alt="Experience &amp; Savings"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RelativeContentBlock2;
