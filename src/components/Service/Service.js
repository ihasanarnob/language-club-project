import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Service.css'

const Service = () => {
    const [courses,setCourses] = useState([]);
    useEffect( ()=>{
        fetch('./main.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])
    return (
        <div className="body">
            {/* Header... */}
            <Header></Header>

            <h1 className="heading">Our Premium Courses </h1>

            {
                courses.map(course => 
                    <div className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded card mb-3" style={{maxWidth: "800px"}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                         <img src={course.image} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                             <div className="card-body">
                             <h5 className="card-title"> {course.course} </h5>
                             <h6 className="card-text"> Book Text: {course.text} </h6>
                             <p className="card-text"> Course Duration: {course.duration} </p>
                             <h6 className="card-text"> Course Fees: {course.fees} BDT </h6>
                    </div>
                    </div>
                    </div>
                    </div>                  
                    )
                    // .....
            }
            {/* Footer.... */}
            <Footer></Footer>
        </div>
    );
};

export default Service;