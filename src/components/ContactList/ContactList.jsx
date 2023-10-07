import { ContactInfo, ContactItem, ContactListContainer, DeleteButton } from "components/ContactList/ContactList.styed"

import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <ContactListContainer>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactInfo>
              {name}: {number}
            </ContactInfo>
            <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ContactListContainer>
  );
};