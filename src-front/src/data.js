
let invoices = [
  {
        id : 1 ,
       
        eventName : "Arts",
        
        details :" A national fine art culture that elevates the general taste of the community and contributes to nurturing creativity at the local, regional and international levels.Advancement of Saudi fine art by creating an appropriate artistic environment open to the world that supports the plastic artist and the plastic artist.",
        src:"https://iqraa.com/Media/Blog_Post_Pictures/c9d2fb90-4c95-426a-bf99-60cff60eb5f8.jpg",
        src1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKg-uw8PM1wvHtNm7wRUoNtv6QmuFWFXdBO7ZDynSPyQyY23vP8RTtp9sp1kqRv-7K0k&usqp=CAU ",
        src2:"",
        src3:"",
        src4:"",
  },

  {
    id : 2 ,
     eventName : "Sports",
     details :"  A national sports culture that raises the public taste of society and contributes to nurturing creativity at the local, regional and international levels.Advance Saudi sports by creating an appropriate sports environment open to the world that supports sports and athletes.  ",
    src:"https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2021-10/14843.jpeg?itok=ZY4zyuOe",

    src1:"",
    src2:"",
    src3:"",
    src4:"",
},


{
  id : 3 ,
   eventName : "Cinema",
   details :"The way we characterize our cinemas is essential to meet the expectations of our guests.  We customize each cinema location for the surrounding market and the preferences of our guests by offering a mix of different cinematic experiences from exciting 4DX to luxurious experiences.",
  src:"https://pocketstop.com/wp-content/uploads/2021/08/Theme20Based20Decor20from20Geek20Wire.png",
  src1:"",
  src2:"",
  src3:"",
  src4:"",
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

