import { useEffect, useState } from "react";
import { Contact } from "../../models/contact.class";
import { ContactComponent } from "../pure/ContactComponent";
import ContactForm from "../pure/form/ContactForm";

export const ContactList = () => {
  const contact1 = new Contact(
    "Fernando",
    "Gortari",
    "fernando.gortari@gmail.com",
    false
  );

  const contact2 = new Contact(
    "Mario",
    "Gortari",
    "mario.gortari@gmail.com",
    true
  );

  const [contacts, setContacts] = useState([contact1, contact2]);

  useEffect(() => {
    console.log("Task state has been modified");
    return () => {
      console.log("TaskList omponent is going to unmount...");
    };
  }, []);

  const createContact = (contact) => {
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  };

  const deleteContact = (contact) => {
    console.log("Contacto eliminado", contacts.indexOf(contact));
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  };

  const changeContactStatus = (contact) => {
    console.log("change status contatc => ", contact.indexOf(contact));
    const index = contact.indexOf(contact);
    const tempContacts = [...contact];
    tempContacts[index].isConected = !tempContacts[index].isConected;
    setContacts(tempContacts);
    console.log(contacts);
  };
  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card header title */}
          <div className="card-header p-3">
            <h3>Contacts</h3>
          </div>
          {/* Card body */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <ContactComponent
                      key={index}
                      contact={contact}
                      changeContactStatus={changeContactStatus}
                      remove={deleteContact}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactForm createContact={createContact} />
    </div>
  );
};
