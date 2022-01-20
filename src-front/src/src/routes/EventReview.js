import React from 'react';
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
 import {  Link } from "react-router-dom";
function EventReview() {
  let params = useParams();
  let invoice = getInvoice(Number(params.invoiceId));

   return (
     <main className='show' style={{ padding: "1rem 0" }}>
          <img className="imgg" src={invoice.src} width="700" height="300"/>
          <br></br> <br></br>
          <div className='Review'>
            <table  border="6">
              <tr>
              <td><img src={invoice.src1} width="200" height="200"/></td>

             <td><img src={invoice.src2} width="200" height="200"/></td>

             <td> <img src={invoice.src3} width="200" height="200"/></td>

            <td> <img src={invoice.src4} width="200" height="200"/></td>
              </tr>
            </table>
          </div>
          <br></br>
          <Link to="/Home"><button>Available Events </button></Link> |{" "}


     </main>
   );
 }
 export default EventReview
