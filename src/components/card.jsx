import React from "react";

const Card = props => {
  let className = "pix-content text-left pix_feature_std white-bg";
  switch (props.color) {
    case "blue":
      className += " pix_blue_border";
      break;
    case "green":
      className += " pix_green_neon_border";
      break;
    case "red":
      className += " pix_red_border";
      break;
    case "darkgrey":
      className += " pix_dark_grey_border";
      break;
    case "gray":
      className += " pix_gray_border";
      break;
    case "lightgrey":
      className += " pix_light_grey_border";
      break;
    case "orange":
      className += " pix_orange_border";
      break;
    case "yellow":
      className += " pix_yellow_border";
      break;
    default:
  }
  return (
    <div className="col-md-4 col-xs-12 col-sm-12 column ui-droppable">
      <div className={className}>
        <div className="pix-padding-h-10">
          <h5 className="pix-black-gray-dark secondary-font">
            {props.heading}
          </h5>
          <div className="pix-margin-bottom-15">
            <h6>
              <span className="label label-default pix-black-gray-light pix-darkblue-transparent-30">
                {props.tag}
              </span>
            </h6>
          </div>
          <p className="pix-black-gray-light big-text pix-margin-bottom-20">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
