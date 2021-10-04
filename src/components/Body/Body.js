import React, { useEffect, useState } from 'react';

const Body = () => {
    const [services,setServices] = useState([]);
    useEffect( () =>{
        fetch('./head.json')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])
    return (
        <div className="container row row-cols-1 row-cols-md-2 g-4 mx-auto h-100">

            {
                services?.map(service => <div key={service.id} className="col">
                <div className="card">
                  <img src={service.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{service.course}</h5>
                    <h6 className="card-text">Lessons:{service.Lessons}</h6>
                  </div>
                </div>
              </div> )
            }
        </div>
    );
};

export default Body;