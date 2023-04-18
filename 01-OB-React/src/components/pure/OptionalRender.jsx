import React, { useState } from "react";

// ? )Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

let red = 50;
let green = 180;
let blue = 50;

// ? Estilo para usuario logueado
const loggedStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: "white",
  fontWeight: "bold",
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

// Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button className="btn btn-success" onClick={loginAction} style={propStyle}>
      Login
    </button>
  );
};

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button className="btn btn-danger" onClick={logoutAction} style={propStyle}>
      Logout
    </button>
  );
};

export const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  //   const updateAccess = () => {
  //     setAccess(!access);
  //   };

  const loginAction = () => {
    setAccess(!access);
  };

  const logoutAction = () => {
    setAccess(!access);
  };

  let optionalButton;

  if (access)
    optionalButton = (
      <LogoutButton logoutAction={logoutAction} propStyle={unloggedStyle} />
    );
  else
    optionalButton = (
      <LoginButton loginAction={loginAction} propStyle={loggedStyle} />
    );

  //   if (access) optionalButton = <button onClick={updateAccess}> Logout</button>;
  //   else optionalButton = <button onClick={updateAccess}> Login</button>;

  // Unread messages
  const addMessages = () => {
    setNMessages(nMessages + 1);
  };

  const removeMessages = () => {
    if (nMessages > 0) setNMessages(nMessages - 1);
  };

  return (
    <div>
      {/* Optional Button */}
      {optionalButton}
      {/* N Messages unread */}
      {/* {nMessages > 0 && nMessages === 1 && (
        <p>You have {nMessages} new message...</p>
      )}
      {nMessages > 1 && <p>You have {nMessages} new messages...</p>}
      {nMessages <= 0 && <p>There are no new Messages</p>} */}

      {/* Ternary Operator */}
      {access ? (
        <div>
          {nMessages > 0 ? (
            <p>
              You have {nMessages} new message{nMessages > 1 && "s"}...
            </p>
          ) : (
            <p>There are no new Messages</p>
          )}
          <div>
            <button className="btn btn-primary m-1" onClick={addMessages}>
              {nMessages === 0 ? "Add your first message" : "Add new message"}
            </button>
            <button
              className="btn btn-outline-danger m-1"
              onClick={removeMessages}
            >
              {nMessages === 0 ? "No messages to delete" : "Delete a message"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
