import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput
} from '@material-ui/core';
import { isEmailValid, isValueEmpty } from 'api/contact';
import { useRef, useState } from 'react';

import contact from 'constants/contact';
import data from 'constants/data';

const ContactForm = () => {
  const emailInputRef = useRef(null);
  const [emailInputErrorMessage, setEmailInputErrorMessage] = useState(null);
  const invalidEmail = Boolean(emailInputErrorMessage);

  const [messageData, setMessageData] = useState(Object.freeze({
    name: '',
    email: '',
    subject: '',
    message: ''
  }));

  const validateEmail = value => {
    if (isValueEmpty(value)) {
      return contact.emailValidationErrorMessage.presence;
    }

    if (!isEmailValid(value)) {
      return contact.emailValidationErrorMessage.emailFormat;
    }

    return null;
  };

  const handleChange = event => {
    if (event.target.id === 'email') {
      setEmailInputErrorMessage(validateEmail(event.target.value));
    }

    setMessageData({
      ...messageData,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmitMessage = event => {
    event.preventDefault();

    const emailErrorMessage = validateEmail(messageData.email);
    const invalidEmail = Boolean(emailErrorMessage);
    if (invalidEmail) {
      setEmailInputErrorMessage(emailErrorMessage);
      emailInputRef.current.focus();
      emailInputRef.current.scrollIntoView({ behavior: 'smooth' });
      return false;
    }

    document.location.href = `mailto:${data.contact.email}
    ?cc=${messageData.email}
    &subject=${encodeURIComponent(messageData.subject)}
    &body=${encodeURIComponent(messageData.message)}`;
  };

  return (
    <form onSubmit={handleSubmitMessage} noValidate>
      <Grid container spacing={4}>
        <Grid item sm={6} xs={12}>
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='name'>{contact.contactFormField.name}</InputLabel>
            <OutlinedInput
              id='name'
              autoComplete='name'
              label={contact.contactFormField.name}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl variant='outlined' fullWidth required error={invalidEmail}>
            <InputLabel htmlFor='email'>{contact.contactFormField.email}</InputLabel>
            <OutlinedInput
              inputRef={emailInputRef}
              id='email'
              name='from'
              autoComplete='email'
              label={contact.contactFormField.email}
              onChange={handleChange}
              aria-describedby='email-text'
            />
            <FormHelperText id='email-text'>
              {invalidEmail ? emailInputErrorMessage : contact.required}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='subject'>{contact.contactFormField.subject}</InputLabel>
            <OutlinedInput
              id='subject'
              name='subject'
              label={contact.contactFormField.subject}
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant='outlined' fullWidth>
            <InputLabel htmlFor='message'>{contact.contactFormField.message}</InputLabel>
            <OutlinedInput
              id='message'
              name='body'
              label={contact.contactFormField.message}
              onChange={handleChange}
              multiline
              rows={9}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box display='flex' justifyContent='flex-end' mt={2}>
        <Button type='submit' color='primary' variant='contained' size='large'>
          {contact.sendMessage}
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;