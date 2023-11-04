import { useSelector } from 'react-redux';
import { getContacts, getNameFilter } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ListItem } from 'components/ContactListItem/ContactListItem.styled';
import { ContactListUl } from 'components/ContactList/ContactList.styled';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const getVisibleContacts = (contacts, nameFilter) => {
  const normalizedFilter = nameFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getNameFilter);
  const shownContacts = getVisibleContacts(contacts, nameFilter);

  if (shownContacts.length === 0) {
    return <Notification message="There is no contacts" />;
  }

  return (
    <div>
      <ContactListUl>
        {shownContacts.map((contact, id) => (
          <ListItem key={contact.id}>
            <ContactListItem contact={contact} />
          </ListItem>
        ))}
      </ContactListUl>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};