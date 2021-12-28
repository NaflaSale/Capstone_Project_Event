import React from 'react';
import { Outlet,NavLink,useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

 function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
      <div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >
          <input
            value={searchParams.get("filter") || ""}
            onChange={event => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          {invoices
            .filter(invoice => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(invoice => (
              <NavLink
                style={({ isActive }) => ({
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                })}
                to={`/Events/${invoice.id}`}
                key={invoice.id}
              >
                {invoice.eventName}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </div>
    );
  }
  export default Invoices 











// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// export default function Events() {
//     const [MyEvent, setMyEvent] = useState({id:"",type:"",eventName:"",location:"",time:"",duration:""})
   

//   useEffect(()=>{
//     //for(let i =0 ; i<length-1; i++){}
//     axios.get("/api/event")
//      .then(response=>{
//        console.log(response.data)
//        setMyEvent(response.data[0])
//     })
//     return()=>{}
//     },[])
  
// //stringify
//    return (
//     <div>
//             <br></br>
//       <br></br>
//       <h2>MY EVENT DETAILS ARE:  {JSON.stringify(MyEvent)}</h2>
     
     
//        </div>
//   ) }
   
   

