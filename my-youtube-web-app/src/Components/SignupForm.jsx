import React from 'react';

const SignupForm = ({
  username,
  password,
  handleChange,
  signupUser
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    signupUser()
  }

  return (
    <div>
      <h2> Sign-Up </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
        /><br/>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="***"
          onChange={handleChange}
        /><br/>
        <input type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default SignupForm;