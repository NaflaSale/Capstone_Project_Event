import React from 'react';
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
 import {  Link } from "react-router-dom";
function EventReview() {
  let params = useParams();
  let invoice = getInvoice(Number(params.invoiceId));

   return (
     <main className='show' style={{ padding: "1rem 0" }}>
          {/* <h2> ID:  {params.invoiceId}</h2> */}
          <img className="imgg" src={invoice.src} width="700" height="300"/>
          <p> {invoice.src1}</p>
          <p> {invoice.src2}</p>
          <p> {invoice.src3}</p>
          <p>{invoice.src4} </p>
          {/* <p> {invoice.duration} </p> */}
          <Link to="/Home"><button>Home </button></Link> |{" "}

     </main>
   );
 }
 export default EventReview
