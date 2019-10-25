import React from 'react';

const Login = () => {
  return (
    <div className="App">
      <form>
        <fieldset>
          <legend>Sign in</legend>

          <label for="username">Username or email address</label>
          <input id="username" name="username" type="text" autocapitalize="off" autocorrect="off" />

          <label for="password-sign-in">Password</label>
          <input id="password-sign-in" name="password" type="password" />

          <input type="submit" value="Sign in" />
        </fieldset>
      </form>
    </div>
  )
}

export default Login;
