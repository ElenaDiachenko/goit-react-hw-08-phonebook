import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { ImPlus } from 'react-icons/im';
import { Label, Input, Message, Button, Title } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix';
import { useWindowResize } from 'hooks/useWindowResize';
import { selectContacts } from 'redux/contacts/selectors';
import ClipLoader from 'react-spinners/ClipLoader';
const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name is not valid'
    ),
  number: yup
    .string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

const initialValues = {
  name: '',
  number: '',
};
const options = {
  position: 'right-top',
  fontSize: '20px',
  width: '450px',
  borderRadius: '4px',
  closeButton: true,
  info: {
    background: '#000000',
    color: '#ffffff',
    notiflixIconColor: 'rgba(225,225,225,0.5)',
  },
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const { width } = useWindowResize();

  const addValidateValues = async values => {
    if (contacts.find(contact => contact.name === values.name)) {
      Notify.info(`${values.name} is already in contacts`, options);
      return;
    }
    try {
      await dispatch(addContact(values));
      Notify.info(`Contact added successfully`, options);
    } catch (error) {
      Notify.info(`Error adding contact`, options);
      console.log(error);
    }
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await addValidateValues(values);

    setSubmitting(false);
    resetForm();
  };

  return (
    <>
      <Title>Add new contact</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Label>
                Name
                <Input type="text" name="name" placeholder="Name..." />
                <Message name="name" component="span" />
              </Label>

              <Label>
                Number
                <Input type="tel" name="number" placeholder="Phone numer" />
                <Message name="number" component="span" />
              </Label>
              <Button type="submit" disabled={isSubmitting}>
                {!isSubmitting &&
                  (width < 768 ? (
                    <ImPlus
                      style={{ width: '25px', height: '25px', color: 'white' }}
                    />
                  ) : (
                    'Add contact'
                  ))}
                {isSubmitting && <ClipLoader color="#ffffff" size={12} />}
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
