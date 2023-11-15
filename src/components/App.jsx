import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import  ContactForm  from '../components/ContactForm/ContactForm';
import  Filter  from '../components/ContactFilter/ContactFilter';
import ContactList from '../components/ContactList/ContactList';
import Notification from './Notification/Notification';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />

      {isLoading && !error && <Notification message="Request in progress..." />}

      {contacts.length > 0 && (
        <>
          <h2> Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
      <GlobalStyle />
    </Layout>
  );
};