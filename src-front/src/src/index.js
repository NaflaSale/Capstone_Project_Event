import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./routes/Home";
import Login from "./routes/Login";
import Events from "./routes/Events";
import EventReview from "./routes/EventReview";
import Ticket from "./routes/Ticket";
import Event from './routes/Event';
import EnterTicket from './routes/EnterTicket';
import Admin from "./routes/Admin";
import Event1 from "./routes/img/Event1.png";



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}>
  <Route path="Login" element={<Login />} />
   
        {/* <Route path="/" element={<App />}> */}
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
                      <img src={Event1} alt="A" className="bacground3" width={1100} />

              {/* <p style={{fontFamily:"monospace" , fontSize:"20px"}}>Select please..</p> */}
              {/* <p className='event2'>The Kingdom of Saudi Arabia is adorned with events, festivals and activities that have a variety of heritage, cultural and entertainment festivals, making it an impressive destination for tourists, pointing the world to the other, making the kingdom’s beauty and preserving its traditions and heritage in the most beautiful ways that delighted adults and children.</p> */}
              {/* <video src="https://youtu.be/kGUMd-K2BY8" width={500}></video> */}
              {/* <embed src="https://youtu.be/kGUMd-K2BY8" width="400px" height="200px"/> */}
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/eoW5L6Rdy8w" frameborder="0" allowfullscreen></iframe> */}
            </main>
          }
        />
      

        
       <Route path="Home" element={<Home />} /> 
       <Route path="EnterTicket" element={<EnterTicket />} /> 
        {/* </Route> */}

        

        <Route path="Admin" element={<Admin />} />
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

