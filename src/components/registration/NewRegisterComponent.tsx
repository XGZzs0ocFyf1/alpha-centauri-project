import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";

interface UserData {
  username: string;
  password: string;
  email: string;
}

const NewRegisterComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    password: "",
    email: "",
  });

  const createUserDataMutation = useMutation((newUserData: UserData) =>
    axios.post("http://localhost:8080/login_form", newUserData)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserDataMutation.mutateAsync(userData);
    } catch (error) {
      console.log("Error sending data: ", error);
    }
  };
  return (
    <div className="form_wrapper">
      <h2 className="form_title">Registration form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form_field">
            <label htmlFor="username">
              <span>Username:</span>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                value={userData.username}
                placeholder="What name do you want ?"
                required
              />
            </label>
        </div>
        <div className="form_field">
            <label htmlFor="password">
              <span>Password:</span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Dont forget new password"
                onChange={handleChange}
                value={userData.password}
                required
              />
            </label>
        </div>
        <div className="form_field">
            <label htmlFor="email">
              <span>Email:</span>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={userData.email}
                placeholder="We will never send spam!"
                required
              />
            </label>
        </div>
        <button type="submit">Register me!</button>
      </form>
    </div>
  );
};

export default NewRegisterComponent;
