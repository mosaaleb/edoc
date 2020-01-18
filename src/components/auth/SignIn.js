import React, { useState } from 'react';
import Axios from 'axios';

const SignIn = () => {
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/authenticate', { authentication: { ...inputFields } })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={inputFields.email}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, email: e.target.value })}
        className="border-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={inputFields.password}
        // prettier-ignore
        onChange={(e) => setInputFields({ ...inputFields, password: e.target.value })}
        className="border-2 border"
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
