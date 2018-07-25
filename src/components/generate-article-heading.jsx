import React from "react";

const GenerateArticleHeading = props => {
  return (
    <div
      className="pix_section pix-padding-v-40 pix-darkblue-transparent article-page"
      id="section_titles_1"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-bottom-30 text-center">
              <h2 className="pix-black-gray-dark pix-no-margin-top secondary-font">
                {props.data[0].heading}
              </h2>
              <div>
                <span className="pix-bar blue-bg pix-margin-bottom-20 pix-margin-top-10" />
              </div>
              <p className="pix-black-gray-light big-text-20 pix-small-width-text">
                {props.data[0].subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateArticleHeading;
