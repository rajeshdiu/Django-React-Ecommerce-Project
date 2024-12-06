import React from 'react';

export default function Contact({ elements }) {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Page</h1>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="list-group">


            {elements.map((contact,index) => (

                <div key={index} className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-3">

                    <div className="d-flex flex-column">
                    <h5 className="mb-1">{contact.name}</h5>
                    <p className="mb-1"><strong>Phone:</strong> {contact.number}</p>
                    <p className="mb-1"><strong>Email:</strong> {contact.email}</p>
                    <p className="mb-1"><strong>Address:</strong> {contact.address}</p>
                    </div>
                    </div>
                    
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
