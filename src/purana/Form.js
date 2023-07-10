import React, { useState } from 'react';
import { db } from './config/Firebase'; // Import the Firestore instance


function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    db.collection('entries')
      .add(formData)
      .then((docRef) => {
        console.log('Document added with ID: ', docRef.id);
        // Optionally, show a success message or perform other actions
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
        // Handle errors or show an error message
      });

    // Reset the form data
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;