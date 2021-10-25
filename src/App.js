import React from 'react';
import ProfilePhoto from './Component/Profile/photo.jpg';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function App() {
  return (
    <div className="container">
    <div className="card mb-3 col-md-10 offset-1 bgCard">
      <div className="row">
          <div className="col-md-3">
              <img style= {{padding: '10px'}} className="card-img" src={ProfilePhoto} alt="profile"/>
          </div>
          <div className="col-md-9 bloc2">
            < FullName/>
            < Address/>
          </div>
     </div>
    </div>
    </div>
  );
}

export default App;
