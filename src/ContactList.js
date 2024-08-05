import React from 'react';

function ContactList() {
  const contacts = [
    { name: "Eshe Aziz", email: "eshehaledhaziz.com" },
    { name: "Sheikha Aziz", email: "sheikhaaziz.com" },
    { name: "Warda Mohammed", email: "wardamohammed.com" }
  ];

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <h2>{contact.name}</h2>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
