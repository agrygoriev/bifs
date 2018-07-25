import React from "react";

const CardsHeading = props => {
  return (
    <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
      <div className="pix-content pix-padding-bottom-30 text-center">
        <h1 className="pix-black-gray-dark text-center pix-no-margin-top secondary-font">
          {props.heading}
        </h1>
        <h5 className="pix-black-gray-light pix-md-width-text pix-no-margin-top">
          {props.subheading}
        </h5>
      </div>
    </div>
  );
};
export default CardsHeading;
