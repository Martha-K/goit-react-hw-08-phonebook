import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { fetchContacts } from '../../redux/contacts/contactOperation';
import { Container } from './contactsStyled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state?.contacts?.isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
console.log('gvvhjb', isLoading);
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container>
        <ContactForm />
        <div>{isLoading && 'Request in progress...'}</div>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
