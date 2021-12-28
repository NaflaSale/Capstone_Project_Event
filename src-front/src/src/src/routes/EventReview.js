// function EventReview() {


  

//   return (
//  <div>
//      <h1>EventReview</h1>
//  </div>
//    );
//  }
//  export default  EventReview;

import React from 'react';
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
 import {  Link } from "react-router-dom";
function EventReview() {
  let params = useParams();
  let invoice = getInvoice(Number(params.invoiceId));

   return (
     <main style={{ padding: "1rem 0" }}>
          <h2> ID:  {params.invoiceId}</h2>
          <img className="imgg" src={invoice.src} width="700" height="300"/>
          <p>Type: {invoice.type}</p>
          <p> Name: {invoice.eventName}</p>
          <p>Location: {invoice.location}</p>
          <p>Time:  {invoice.time} </p>
          <p>Duration:  {invoice.duration} </p>
          <Link to="/Home"><button>Home </button></Link> |{" "}

     </main>
   );
 }
 export default EventReview
