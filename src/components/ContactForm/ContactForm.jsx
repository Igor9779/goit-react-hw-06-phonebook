import { useState } from "react";
import { Button, Form, Input } from "./ContactForm.styled";

export const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value)
        } else if (name === 'number') {
            setNumber(value)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, number});
        setName('');
        setNumber('');
    }

        return (
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <Button type="submit">Add contact</Button>
            </Form>
        );
}

export default ContactForm;