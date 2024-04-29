'use client'
import React, { useState } from 'react';

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here

    };

    return (
        <form action="https://api.web3forms.com/submit" method="POST">
            <label htmlFor="name">Name</label>
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <textarea name="message" required></textarea>
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <button type="submit">Submit Form</button>

        </form>
    );
};

export default Form;