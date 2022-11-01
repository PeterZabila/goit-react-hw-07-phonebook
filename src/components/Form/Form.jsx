import { useState } from 'react';
import { Button, MainTitle, Label, Input } from '../Main.styled';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.currentTarget.value);
  };

  const changeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const addToContacts = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    // <Container>
    <form onSubmit={addToContacts}>
      <Label>
        <MainTitle>Name</MainTitle>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeName}
          value={name}
        />
      </Label>
      <Label>
        <MainTitle>Number</MainTitle>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeNumber}
          value={number}
        />
      </Label>

      <Button type="subbmit">
        Add contact
      </Button>
    </form>
    // </Container>
  );
};

export default Form;
