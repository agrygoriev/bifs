import React from "react";

const TellMeMore = props => {
  return (
    <div className="pix_section pix-padding-v-10 pix-darkblue-transparent">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-v-10">
              <div className="media">
                <div className="media-body media-middle media-box-area pix-no-h-padding">
                  <div className="pix-inner">
                    <h6
                      className="pix-black-gray-light pix-no-margin-top pix-no-margin-bottom"
                      style={{ fontWeight: 700 }}
                    >
                      {props.heading}
                    </h6>
                    <p className="pix-black-gray-light pix-no-margin-top pix-no-margin-bottom">
                      {props.text}
                    </p>
                  </div>
                </div>
                <div className="media-right media-middle text-center media-box-area">
                  <div className="pix-inner">
                    <a
                      href="#tellmemore"
                      className="btn yellow-bg pix-white normal btn-md"
                    >
                      {props.btntext}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TellMeMore;
