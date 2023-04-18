import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import { useEffect } from "react";

export const ContactComponent = ({ contact, changeContactStatus, remove }) => {
  useEffect(() => {
    console.log("Created Task");
    return () => {
      console.log(`Task: ${contact.name} is going to unmount`);
    };
  }, [contact]);

  const contactStatusBadge = () => {
    switch (contact.isConected) {
      case true:
        return (
          <h6 className="mb-0">
            <span className="badge bg-success" style={{ cursor: "pointer" }}>
              Conectado
            </span>
          </h6>
        );

      case false:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger" style={{ cursor: "pointer" }}>
              Dsconectado
            </span>
          </h6>
        );

      default:
        break;
    }
  };

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">
          {contact.name} {contact.lastName}
        </span>
      </th>
      <td className="align-middle p-2">
        <span>{contact.email}</span>
      </td>
      <td className="align-middle" onClick={() => changeContactStatus(contact)}>
        {contactStatusBadge()}
      </td>
      <td className="p-2">
        <i
          className="bi-trash"
          style={{ color: "tomato", cursor: "pointer" }}
          onClick={() => remove(contact)}
        ></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  changeContactStatus: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};
