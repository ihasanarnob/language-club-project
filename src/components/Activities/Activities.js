import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Activities = () => {
    return (
        <div className="body">
            <div>
                <Header></Header>
            </div>
                <h3 className="heading"> Look Our Latest Activiteis </h3>
                <table className="container m-5 mx-auto table table-success table-striped">
                <thead>
                  <tr>
                    <th scope="col">Date </th>
                    <th scope="col">Activities </th>
      
                   </tr>
                 </thead>
                 <tbody>
                     <tr>
                       <th scope="row">26 September 2020</th>
                       <td>19thAnnual General Meeting (AGM) of Japanese Universities Alumni Association in Bangladesh (Virtual)</td>
                      </tr>
                      <tr>
                       <th scope="row">27 March 2021</th>
                       <td>20th Annual General Meeting (AGM) of Japanese Universities Alumni Association in Bangladesh (Virtual)</td>
                      </tr>
                       <tr>
                        <th scope="row">1 June 2021</th>
                          <td colSpan="2">2nd  Meeting of the11 Executive Committee helded at 9 PM (Virtual)</td>
                        </tr>
                        <tr>
                            <th scope="row">05 August 2021</th>
                             <td colSpan="2">Condolence Meeting (Online) of Titan Japanese Language Center for Late Prof. Dr. Tony Stark </td>
                        </tr>
                         <tr>
                         <th scope="row">11 August 2021</th>
                         <td colSpan="2">3rd Adjourned  Meeting of the11 Executive Committee helded at 9 PM (Virtual)</td>
                          </tr>
                   </tbody>
                  </table>
                <div>
                   <Footer></Footer>
                </div>
                </div>
          );
      };

export default Activities;