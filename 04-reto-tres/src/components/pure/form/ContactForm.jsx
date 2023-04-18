import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../../models/contact.class";

const ContactForm = ({ createContact }) => {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");

  const newContact = (e) => {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false
    );
    createContact(newContact);
  };

  return (
    <form
      onSubmit={newContact}
      className="d-flex justify-content-center align-items-center mb-4 pt-2"
    >
      <div className="form-outline flex-fill">
        <input
          placeholder="Name"
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg m-1"
          required
          autoFocus
        />

        <input
          placeholder="Lastname"
          ref={lastNameRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg m-1"
          required
        />

        <input
          placeholder="email@email.com"
          ref={emailRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg m-1"
          required
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2">
        Create
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};

export default ContactForm;
