import React from 'react';
import './ContactsPage.css';

function ContactsPage() {
  const [contacts, setContacts] = React.useState([]);

  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <h2>Контакты</h2>
        <button className="add-contact-btn">+ Добавить контакт</button>
      </div>
      <div className="contacts-list">
        {contacts.length === 0 ? (
          <div className="empty-state">Нет контактов</div>
        ) : (
          contacts.map((contact) => (
            <div key={contact.id} className="contact-item">
              <div className="contact-avatar">{contact.name[0]}</div>
              <div className="contact-info">
                <div className="contact-name">{contact.name}</div>
                <div className="contact-email">{contact.email}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactsPage;
