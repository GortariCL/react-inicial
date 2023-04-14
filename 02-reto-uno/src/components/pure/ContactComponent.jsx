import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  console.log(contact);
  return (
    <div>
      <h3>Nombre: {contact.name}</h3>
      <h3>Apellido: {contact.lastName}</h3>
      <h3>Email: {contact.email}</h3>
      <hr />
      <h5>
        Estado:{" "}
        {contact.isConected ? "Contacto en Línea" : "Contacto No Disponible"}
      </h5>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
