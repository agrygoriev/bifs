import React from "react";
import FooterLogo from "../assets/img/bi-logo.svg";
import FooterMap from "../components/footer-map";
const FooterBlock = props => {
  return (
    <footer className="pix_section pix-padding-v-20 dark-blue-bg" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-4">
            <div className="pix-content">
              <div className="mobile-text-center">
                <a href="/">
                  <img src={FooterLogo} alt="Logo" width="auto" height="auto" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-4">
            <div className="pix-content">
              <h5
                className="pix-white"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                {props.heading}
              </h5>
              <div className="pix-padding-v-10">
                <p className="pix-white">
                  {props.street} <br /> {props.city}
                  {props.postcode}
                  <br />
                  {props.country}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 column ui-droppable col-md-4">
            <div className="pix-content">
              <FooterMap />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-8">
            <div className="pix-content">
              <div className="pix-padding-v-10">
                <div className="pix-white big-text pix-padding-v-10 mobile-text-center">
                  {props.copyright}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 column ui-droppable col-md-4">
            <div className="pix-content">
              <div className="pix-padding-v-10">
                <div className="pix-white text-right mobile-text-center pix-margin-links">
                  <a
                    href="/privacy/"
                    className="btn pix-white pix-padding-h-20 normal"
                  >
                    {props.textprivacy}
                  </a>
                  <a
                    href="/terms/"
                    className="btn pix-white pix-padding-h-20 normal"
                  >
                    {props.textterms}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterBlock;
