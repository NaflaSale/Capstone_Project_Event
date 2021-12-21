import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import Home from "./routes/Home";
import Login from "./routes/Login";
import Events from "./routes/Events";
import EventReview from "./routes/EventReview";
import Ticket from "./routes/Ticket";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    
        <Route path="/" element={<App />}/>
        <Route path="Home" element={<Home />} >
        <Route path="l_id" element={<Home />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="Events" element={<Events />} >
        <Route path="l_id" element={<Events />} />
        </Route>
        <Route path="EventReview" element={<EventReview />} >
        <Route path="l_id" element={<EventReview />} />
        </Route>
        <Route path="Ticket" element={<Ticket />} />
        
    {/* <App /> */}
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

