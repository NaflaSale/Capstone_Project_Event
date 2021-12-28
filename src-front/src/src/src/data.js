
let invoices = [
  {
        id : 1 ,
       // type : "Arts",
        eventName : "Arts",
        //location :"Aljouf",
        //time:"12-12-2020",
        details :"2 Days",
        src:"https://media-exp1.licdn.com/dms/image/C511BAQFDjtrS0u76Tw/company-background_10000/0/1585488022941?e=2159024400&v=beta&t=qaQNzDL0-M6GBBR04mfXA2bB0RMdPuUhDYu2NFVxVNU",
  },

  {
    id : 2 ,
    //type : "Sports",
     eventName : "Sports",
    // location :"Tabuk",
    // time:"30-12-2021",
     details :"2:30 H",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0myaFW7s5cFinE61ie12drQOLOk8-XVWCJeckwxUu750eKP0gh_dk7u4CjGZkJ09gRo&usqp=CAU",
},


{
  id : 3 ,
  //type : "Shopping",
   eventName : "Shopping",
  // location :"Aljouf",
  // time:"28-12-2021",
   details :"5 H",
  src:"https://pocketstop.com/wp-content/uploads/2021/08/Theme20Based20Decor20from20Geek20Wire.png",
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



// let invoices = [
//     {
//         id : 12 ,
//         type : "Arts",
//         eventName : "eventName",
//         location :"location",
//         time:"time",
//         duration :"duration",
//     },
//     {
//         id : 11 ,
//         type : "Arts",
//         eventName : "eventName",
//         location :"location",
//         time:"time",
//         duration :"duration",
//     },
    
 
//   ];
  
//   export function getInvoices() { 
//     return invoices;
//   }

//   export function getInvoice(id) {
//     return invoices.find(
//       invoice => invoice.id === id
//     );
//   }
