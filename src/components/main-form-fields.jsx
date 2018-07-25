import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class MainFormFields extends Component {
  render() {
    return (
      <div className="pix-content pix-darkblue-transparent-80 pix-padding-h-20 pix-padding-top-40 pix-padding-bottom-40 text-center">
        <h2 className="pix-white secondary-font">
          6 Financial Advisors Share Their Best Financial Advice for Saving
          Money
        </h2>
        <h5 className="pix-no-margin-top pix-yellow">
          Start by spending less than you earn every month.
        </h5>
        <p className="pix-light-white big-text pix-margin-bottom-20">
          Don't want to save for retirement? Think again! 6 real life financial
          advisors share actual horror stories on what it looks like to not save
          for the future.
        </p>
        <h4 className="pix-white third-font">
          Let us guide you into the future of personal finance!
        </h4>
        <p className="pix-light-gray big-text">
          Contact us today to find out how our advices can increase your
          savings.
        </p>
        <Form className="pix-form-style pixfort-form pix-padding-top-20 pix-form-light-white-bg ui-sortable ui-droppable">
          <FormGroup>
            <Input
              type="text"
              name="name"
              id="nameField"
              placeholder="Enter your full name"
              className="pix-lightblue-transparent"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email address"
              className="pix-lightblue-transparent"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="phone"
              name="phone"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="pix-lightblue-transparent"
            />
          </FormGroup>
          <FormGroup className="checkbox" check>
            <Label className="pix-gray" check>
              <Input type="checkbox" /> Yes, I agree to the GDPR terms and
              conditions
            </Label>
          </FormGroup>
          <FormGroup className="checkbox" check>
            <Label className="pix-gray" check>
              <Input type="checkbox" /> Yes, I would like to receive future
              communications
            </Label>
          </FormGroup>
          <Button className="btn btn-secondary yellow-bg small-text btn-lg pix-white btn-block third-font">
            Submit information
          </Button>
        </Form>
      </div>
    );
  }
}
