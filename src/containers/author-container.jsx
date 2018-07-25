import React from "react";
import AuthorPortrait from "../assets/img/jeff-IMG-032554.png";
const Author = props => {
  return (
    <div className="pix_section pix-padding-v-40">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12 col-sm-12 column ui-droppable">
            <div className="pix-content pix-padding-h-30 pix-padding-v-30 text-center pix-margin-v-10">
              <div className="pix-round-shape-200">
                <img src={AuthorPortrait} alt="Author Portrait" />
              </div>
              <h3 className="pix-black-gray-dark pix-no-margin-bottom">
                {props.name}
              </h3>
              <h6 className="pix-yellow pix-no-margin-top">{props.title}</h6>
              <p className="pix-black-gray-light big-text pix-margin-bottom-30 pix-md-width-text">
                {props.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Author;
