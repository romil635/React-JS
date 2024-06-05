import React,{useState} from "react";

    
    const Update_array = () => {

        const[name , setname] =useState(" ")
        const[profile , setprofile]= useState(["jasmi"])
        console.log(name);
        console.log(profile);
    
        let  Ids = 0
      return (
        <div>
            <input className='p-2 border-2 border-solid border-black' value={name} onChange={(e) => setname (e.target.value)}/>
            <button  className='btn' onClick={() => setprofile([...profile ,{
              id:Ids++,
              name:name
            }])}>submit</button>
            <ul>
              {
                profile.map((date) => (<li key={date.id}>{date.name}</li>))
              }
            </ul>
        </div>
      )
    }

    export default Update_array