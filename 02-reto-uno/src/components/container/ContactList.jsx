import React from "react";
import ContactComponent from "../pure/ContactComponent";
import { Contact } from "../../models/contact.class";

const ContactList = () => {
  const defaultContact = new Contact(
    "Fernando",
    "Gortari",
    "fernando.gortari@gmail.com",
    false
  );

  return (
    <div>
      <ContactComponent contact={defaultContact} />
    </div>
  );
};

export default ContactList;
