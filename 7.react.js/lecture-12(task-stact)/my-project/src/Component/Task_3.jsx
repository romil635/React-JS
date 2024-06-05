import React from 'react'
import { useState } from 'react'

function Task_3() {
  const [form, setform] = useState({
    firsname: 'jasmi',
    lastname: 'mulani',
    email: 'jasmi@gmail.com',
  });

  return (
    <>
      <label><br/>
        first name:
        <input value={form.firsname} onChange={e => {
          setform({
            ...form,
            firsname: e.target.value
          });
        }}
        />
      </label><br />
      <label><br />
        last name:
        <input value={form.lastname} onChange={e => {
          setform({
            ...form,
            lastname: e.target.value
          });
        }}
        />
      </label><br />
      <label><br />
        email:
        <input value={form.email} onChange={e => {
          setform({
            ...form,
            email: e.target.value
          });
        }}
        />
      </label><br />
      <br />
      <p>
        {form.firsname}{''}
        {form.lastname}{''}
        ({form.email})
      </p>
    </>
  );
}

export default Task_3