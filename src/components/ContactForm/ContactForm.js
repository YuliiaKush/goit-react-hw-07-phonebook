import propTypes from 'prop-types';
// import React, { Component } from 'react';
import {
  Form,
  FormName,
  FormNumber,
  FormBtn,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    handleSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
        value={name}
        onChange={handleChangeName}
      />
      <label>Number </label>
      <FormNumber
        type="tel"
        name="number"
        pattern="[0-9]*"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeNumber}
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};