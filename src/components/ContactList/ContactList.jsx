
import {Button, ListItem} from '../Main.styled'

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            <span>{contact.name}</span>: <span>{contact.number}</span>
          </p>
          <Button
            type="button"
            onClick={() => removeContact(contact.id)}
          >
            delete
          </Button>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;
