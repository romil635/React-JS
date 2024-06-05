import React from 'react'

const footer = () => {
  return (
     <>

       <div className="footer">
        <div className="col-1">
            <h3>Link</h3>
            < a href='#'>About</a>
            < a href='#'>Services</a>
            < a href='#'>Contact</a>
            < a href='#'>Shop</a>
            < a href='#'>Blog</a>
        </div>
           <div className="col-2">
            <h3>New Sletter</h3>
            <form>
                <input type='email'placeholder='Your Email'></input><br/>
                <button type='submit'>Submit Now</button>
            </form>
           </div>
           <div className="col-3">
            <h3>Contact</h3>
            <p>123,skill qode <br/> Yogichowk , surat</p>
           </div>
       </div>
    </>
  )
}

export default footer
