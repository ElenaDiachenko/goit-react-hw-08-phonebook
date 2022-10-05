import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/Forms/ContactForm';
import { Container } from 'components/Container/Container';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import ClipLoader from 'react-spinners/ClipLoader';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <ContactForm />

        <Filter />
        {isLoading && !error && (
          <ClipLoader style={{ margin: '0 auto' }} color="#000000" size={32} />
        )}
        <ContactList />
      </Container>
    </main>
  );
};

export default ContactsPage;