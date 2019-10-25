import React from 'react';

const RegisteredFilter = ({ isRegistered, register }) => {
  return (
    <div>
      <form>
        <fieldset>
        <label for="register">Are you registered?</label>
          <input
          type="checkbox"
          checked={isRegistered}
          onChange={register} />
        </fieldset>
      </form>
    </div>
  )
}

export default RegisteredFilter;
