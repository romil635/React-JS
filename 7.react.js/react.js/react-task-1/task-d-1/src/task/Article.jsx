import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Article() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Title of the Article</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur ligula nec libero aliquam, eu fringilla justo porttitor. Fusce eget enim quis libero laoreet placerat. Integer tincidunt dolor nec tellus dapibus, a tempor ipsum lacinia. Aliquam ut dapibus magna. Curabitur non nisl a dui sollicitudin consequat. Mauris pharetra magna in lacus rhoncus hendrerit. In hac habitasse platea dictumst.</p>
              <p className="card-text">Nullam posuere massa quis nisi feugiat, ac tristique mauris fermentum. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tincidunt convallis lorem, in efficitur metus aliquet id. Duis venenatis ut nunc nec viverra.</p>
              <p className="card-text">Etiam mattis ullamcorper arcu vel porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin in felis vel felis tempus dapibus. Mauris consectetur erat velit, eu consequat metus faucibus et. Maecenas laoreet tortor vel lacinia malesuada. Aenean ac leo sed velit pellentesque scelerisque sit amet non eros. Donec nec leo lacinia, laoreet quam nec, ultricies mauris.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
