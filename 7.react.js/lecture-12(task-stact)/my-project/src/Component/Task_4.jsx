import React from 'react'
import { useState } from 'react'

function Task_4() {
  const [person, setperson] = useState({
    name: 'jasmi mulani',
    artwork: {
      title: 'web-site',
      city: 'surat',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcvYBwxIxe_I1kcvoFdBnKHZ9Ya_4r-oSzQ&s'
    }
  });
  function changename(e) {
    setperson({
      ...person,
      name: e.target, value
    });
  }
  function changetitle(e) {
    setperson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }
  function changecity(e) {
    setperson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }
  function changeimage(e) {
    setperson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }
  return (
    <>
      <label>
        name:
        <input value={person.name} onChange={changename} />
      </label><br/>
      <label><br />
        title:
        <input value={person.artwork.title} onChange={changetitle} />
      </label><br/>
      <label><br />
        city:
        <input value={person.artwork.city} onChange={changecity} />
      </label><br/>
      <label><br />
        image:
        <input value={person.artwork.image} onChange={changeimage} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {'by'}<br />
        {person.name}
        <br />
        (locaterd in {person.artwork.city})
      </p>
      <img src={person.artwork.image}
        alt={person.artwork.title}
      />
    </>
  );
}

export default Task_4
