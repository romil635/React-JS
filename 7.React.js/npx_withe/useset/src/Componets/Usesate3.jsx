import { useState } from 'react';

export function Form1() {
  const [form, setForm] = useState({
    firstName: 'Romil',
    lastName: 'Rkholiya',
    email: 'SQ.romilrakholiya@gamil.com',
  });

  return (
    <>
    <div className='d-flex h-48 w-96 bg-emerald-200 border-black'>

      <label className=''>
        First name:
        <input className='bg-yellow-100'
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Last name:
        
        <input className='bg-yellow-100'

          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Email:
        <input className='bg-yellow-100'
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <br></br><br></br>

      <p className='bg-red-500'>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
      </div>
    </>
  );
}
export default Form1
