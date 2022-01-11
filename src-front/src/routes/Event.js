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
         
          {/* <p> Name: {invoice.eventName}</p> */}
         
          <p>  {invoice.details} </p>


        </main>
      );
    }






    

// import React from 'react';
// import { useParams , Link } from "react-router-dom";
// //import { getInvoice } from "../data";
// export default function Invoice() {
//     let params = useParams();
//     let invoice = getInvoice(parseInt(params.invoiceId, 10));
//     return (

//         <main style={{ padding: "1rem" , backgroundColor:"unset" }}>
//           <Link to={`/EventReview/${events.id}`}
//                 key={events.id}>
//               <img src={events.src} width="500" height="300"/>
//               </Link>
//           {/* <p>Type: {invoice.type}</p> */}
//           <p> Name: {events.eventName}</p>
//           {/* <p>Location: {invoice.location}</p> */}
//           {/* <p>Time:  {invoice.time} </p> */}
//           {/* <p>Details:  {invoice.details} </p> */}


//         </main>
//       );
//     }