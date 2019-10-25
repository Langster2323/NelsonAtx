import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        <fieldset>
          <label for="username">Username</label>
          <input type="text" />

          <label for="password">Password</label>
          <input type="password" />

          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  )
}

export default Register;
