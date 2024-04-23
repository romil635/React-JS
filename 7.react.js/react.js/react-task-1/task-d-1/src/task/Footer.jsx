import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod enim vitae lacus varius, et venenatis erat ultrices.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">x
              <li className='change'><a href="#">Home</a></li>
              <li className='change'><a href="#">About</a></li>
              <li className='change'><a href="#">Services</a></li>
              <li className='change'><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              1234 Street Name<br />
              City, State, Zip<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </div>
        </div>
      </div>
      <div className="text-center p-3">
        <p>&copy; 2024 My Own Website </p>
      </div>
    </footer>
  );
}

export default Footer;
