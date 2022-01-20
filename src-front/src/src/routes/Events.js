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





