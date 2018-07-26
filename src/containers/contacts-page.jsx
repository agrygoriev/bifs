import React from "react";
import PageHeading from "../components/page-heading";
import ContactsSection from "../components/contacts-section";
const ContactsPage = props => {
  const contactsHead = {
    heading: props.contacts.heading,
    subheading: props.contacts.subheading
  };
  const address = {
    street: props.contacts.street,
    city: props.contacts.city,
    postcode: props.contacts.postcode,
    country: props.contacts.country
  };

  return (
    <div className="blog-page-wrapper">
      <PageHeading
        heading={contactsHead.heading}
        subheading={contactsHead.subheading}
      />
      <ContactsSection address={address} />
    </div>
  );
};

export default ContactsPage;
