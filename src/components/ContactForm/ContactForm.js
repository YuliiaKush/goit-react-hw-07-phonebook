import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  FormName,
  FormNumber,
  FormBtn,
} from 'components/ContactForm/ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations'
import PropTypes from 'prop-types';

  const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const nameIsInContacts = newName =>
    contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    const isInContacts = nameIsInContacts(name);

    if (isInContacts) {
      alert(`"${name} exist in contact list"`);
      form.reset();
      return;
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <label>Name </label>
      <FormName
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я\-'\s]*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
      />
      <label>Number </label>
      <FormNumber
        type="tel"
        name="number"
        pattern="[0-9]*"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;