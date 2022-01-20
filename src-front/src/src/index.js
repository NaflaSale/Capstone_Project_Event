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
                   </main>
                  }
             />
          <Route path="Home" element={<Home />} /> 
          <Route path="EnterTicket" element={<EnterTicket />} /> 
          <Route path="Admin" element={<Admin />} /> 
          <Route path="Ticket" element={<Ticket />} />
          <Route
          index 
          element={
          <main style={{padding:"1rem"}}>
            <p>SELECT..</p>
          </main>}
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
    </Routes>
 </BrowserRouter>,
  document.getElementById('root')
);

