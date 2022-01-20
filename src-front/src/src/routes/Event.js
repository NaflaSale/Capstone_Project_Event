import React from 'react';
import { useParams , Link } from "react-router-dom";
import { getInvoice } from "../data";
export default function Invoice() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (

        <main className='event2' style={{ padding: "1rem" , backgroundColor:"unset" }}>
          <Link to={`/EventReview/${invoice.id}`}
                key={invoice.id}>
              <img src={invoice.src} width="500" height="300"/>
              </Link>         
          <p className="details">  {invoice.details} </p>
        </main>
      );
    }



