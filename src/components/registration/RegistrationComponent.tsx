// src/components/ContactForm.tsx

import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import "./RegistrationComponent.css";

interface Contact {
  name: string;
  password: string;
 
}

const RegistrationComponent: React.FC = () => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    password: "",

  });

  const createContactMutation = useMutation((newContact: Contact) =>
    axios.post("http://localhost:8080/reg_form", newContact)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createContactMutation.mutateAsync(formData);
      // Handle success
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle error
    }
  };

  return (
    <div className="form_wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form_field">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="form_field">
          <label htmlFor="password" >
            Email:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* <div className="form_field">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div> */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationComponent;
