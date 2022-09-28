import PropTypes from 'prop-types';
import { ContactName, ContactNumber, DeleteButton } from './Contact.styled';
import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ContactName>{name} :</ContactName>
      <ContactNumber>{number}</ContactNumber>
      {/* <DeleteButton onClick={() => dispatch(deleteContact(id))}> */}
      <DeleteButton>Delete</DeleteButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
