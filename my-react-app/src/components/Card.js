import React from 'react';
import '../Card.css';
import logo from '../images/image-removebg-preview.png'; // Adjust the path accordingly

const Card = () => {
  return (
    <div className="card">
      <div  className="card-img">
      
      </div>
      <div className="card-info">
      <img  src={logo} alt="Card" />
         
       
        <p className="text-title">This is introduction </p>
        <p className="text-body">  
                    I am a web developer who loves learning new programming languages and exploring
                    new possibilities. Passionate about creating innovative and user-friendly web
                    applications.   I am a web developer who loves learning new programming languages and exploring
                    new possibilities. Passionate about creating innovative and user-friendly web
                    applications.   I am a web developer who loves learning new programming languages and exploring
                    new possibilities. Passionate about creating innovative and user-friendly web
                    applications.
                </p>
        <button className="card-button">Read More</button>
      </div>
    </div>
  );
};

export default Card;