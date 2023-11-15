import { useSelector } from 'react-redux';
import { selectNameFilter, selectVisibleContacts } from 'redux/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import { ListItem } from 'components/ContactListItem/ContactListItem.styled';
import { ContactListUl } from 'components/ContactList/ContactList.styled';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const nameFilter = useSelector(selectNameFilter);
  const notificationMessage = contacts.length === 0 && nameFilter;

  return (
    <>
      {notificationMessage && <Notification message="There is no contacts" />}

      <ContactListUl>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactListItem {...contact} />
          </ListItem>
        ))}
      </ContactListUl>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};