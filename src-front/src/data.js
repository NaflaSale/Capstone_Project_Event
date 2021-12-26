let invoices = [
    {
        id : 12 ,
        type : "Arts",
        eventName : "eventName",
        location :"location",
        time:"time",
        duration :"duration",
    },
    {
        id : 11 ,
        type : "Arts",
        eventName : "eventName",
        location :"location",
        time:"time",
        duration :"duration",
    },
    
 
  ];
  
  export function getInvoices() { 
    return invoices;
  }

  export function getInvoice(id) {
    return invoices.find(
      invoice => invoice.id === id
    );
  }
