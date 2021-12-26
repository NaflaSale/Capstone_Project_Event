// import React from "react";
// import { Outlet , NavLink ,useSearchParams} from "react-router-dom";
// import { getEvents} from "../data"; 

// export default function EventReviews() {
//     let events = JSON.parse(localStorage.getItem("allEvents"))

//     let [searchParams, setSearchParams] = useSearchParams();
  
//     return (
//       <div style={{ display: "flex" }}>
//         <nav
//           style={{
//             borderRight: "solid 1px",
//             padding: "1rem"
//           }}
//         >
//           <input
//             value={searchParams.get("filter") || ""}
//             onChange={event => {
//               let filter = event.target.value;
//               if (filter) {
//                 setSearchParams({ filter });
//               } else {
//                 setSearchParams({});
//               }
//             }}
//           />
//           {events
//             .filter(event => {
//               let filter = searchParams.get("filter");
//               if (!filter) return true;
//               let name = event.name.toLowerCase();
//               return name.startsWith(filter.toLowerCase());
//             })
//             .map(event => (
//               <NavLink
//                 style={({ isActive }) => ({
//                   display: "block",
//                   margin: "1rem 0",
//                   color: isActive ? "red" : ""
//                 })}
//                 to={`/EventReview/${event.id}`}
//                 key={event.id}
//               >
//                {event.type}

//               </NavLink>
//             ))}
//         </nav>
        
//         <Outlet />
        
//       </div>
//     );
  
//     }
