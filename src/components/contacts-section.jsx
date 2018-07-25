import React from "react";

const ContactsSection = props => {
  console.log(props);
  return (
    <div className="pix_section pix-padding" id="contacts_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-sm-6 column ui-droppable">
            <div className="pix-content">
              <h2 className="pix-black-gray-dark">
                <span className="pix_edit_text">Our Address</span>
              </h2>
              <p className="pix-black-gray-light big-text pix-padding-bottom-20">
                <span className="pix_edit_text">
                  {props.address.street}
                  {props.address.city} {props.address.postcode}{" "}
                  {props.address.country}
                  <br />
                </span>
              </p>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4165.018371498312!2d35.01221130964065!3d32.79594709403758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba5f962f6531%3A0xe4bc6445e6a6682!2zSGFHYWxpbCA0MywgSGFpZmEsINCG0LfRgNCw0ZfQu9GM!5e0!3m2!1suk!2sua!4v1532529946574"
                  width="940"
                  height="350"
                  title="Map"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6 column ui-droppable">
            <div className="pix-content pix-radius-3">
              <h2 className="pix-black-gray-dark">
                <span className="pix_edit_text">Get in Touch</span>
              </h2>
              <p className="pix-black-gray-light big-text pix-padding-bottom-20">
                <span className="pix_edit_text">
                  We are incredibly responsive to your requests and value your
                  questions.
                </span>
              </p>
              <form className="pix-form-style pixfort-form ui-sortable">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control pix-darkblue-transparent"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control pix-darkblue-transparent"
                    placeholder="Enter Your Email Address"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control pix-darkblue-transparent"
                    name="message"
                    rows="5"
                    placeholder="Enter Your Message Here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn blue-neon-bg pix-white btn-lg small-text btn-block"
                >
                  <span className="pix_edit_text">
                    <strong>Send Information</strong>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
