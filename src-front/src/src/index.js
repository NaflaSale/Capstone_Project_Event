// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from './App';
// import EventReview from "./routes/EventReview";
// import Events from "./routes/Events";
// import Event from "./routes/Event"
// ReactDOM.render(<BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />}>
//       <Route path="EventReview" element={<EventReview />} >
//         <Route path=":invoiceId" element={<EventReview />} />
//       </Route>
//       <Route path="Events" element={<Events />}>
//         <Route path=":invoiceId" element={<Event />} />
//         <Route
//           index
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p style={{fontFamily:"monospace" , fontSize:"20px"}}>Select a product please</p>
//               <img  src="https://cdn.icon-icons.com/icons2/621/PNG/512/arrow-pointing-to-left_icon-icons.com_57010.png" width="500" height="300"/>

//             </main>
//           }
//         />
//       </Route>
//       <Route
//         path="*"
//         element={
//           <main style={{ padding: "1rem" }}>
//             <p>There's nothing here!</p>
//           </main>
//         }
//       />
//     </Route>
//   </Routes>
// </BrowserRouter>,
//   document.getElementById('root'));






import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Home from "./routes/Home";
import Login from "./routes/Login";
import Events from "./routes/Events";
import EventReview from "./routes/EventReview";
import EventReviews from './routes/EventReviews';
import Ticket from "./routes/Ticket";
import Event from './routes/Event';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    
        <Route path="/" element={<App />}>
        {/* <Route path="Home" element={<Home />} >
        <Route path="l_id" element={<Home />} /> */}
         <Route path="EventReview" element={<EventReview />} >
         <Route path=":invoiceId" element={<EventReview />} />
      </Route>
        <Route path="Events" element={<Events />}>
        <Route path=":invoiceId" element={<Event />} />
        </Route>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p style={{fontFamily:"monospace" , fontSize:"20px"}}>Select please..</p>

            </main>
          }
        />
      

        
       <Route path="Home" element={<Home />} /> 

        {/* </Route> */}
        <Route path="Login" element={<Login />} />
        {/* <Route path="Events" element={<Events />} />// ADD/ */}
        {/* <Route path="l_id" element={<Events />} />
        </Route> */}
        {/* <Route path="EventReview" element={<EventReviews />} >
        <Route path="l_id" element={<EventReview />} />
        </Route> */}
        <Route path="Ticket" element={<Ticket />} />
        <Route
        index 
        element={
          <main style={{padding:"1rem"}}>
            <p>SELECT..</p>
          </main>

        }
         />
         </Route>
         <Route 
         path="*"
         element={
           <main style={{padding:"1rem"}}>
             <p> nothing here..</p>
           </main>
         }> 
        </Route>
    {/* <App /> */}
    </Routes>

    

    </BrowserRouter>,
  document.getElementById('root')
);

