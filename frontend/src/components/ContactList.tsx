import { useEffect, useState } from "react";
import API from "../api";

interface Contact {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  message?: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    API.get("/contacts")
      .then((res) => setContacts(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>Contacts</h3>

      {contacts.map((c) => (
        <div key={c._id}>
          <p><b>{c.name}</b> - {c.phone}</p>
          {c.email && <p>{c.email}</p>}
          {c.message && <p>{c.message}</p>}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
