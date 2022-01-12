
let invoices = [
  {
        id : 1 ,
       
        eventName : "Arts",
        
        details :" A national fine art culture that elevates the general taste of the community and contributes to nurturing creativity at the local, regional and international levels.Advancement of Saudi fine art by creating an appropriate artistic environment open to the world that supports the plastic artist and the plastic artist.",
        src:"https://s.alqabas.com/wp-content/uploads/2016/07/1-345.jpg",
        src1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhKg-uw8PM1wvHtNm7wRUoNtv6QmuFWFXdBO7ZDynSPyQyY23vP8RTtp9sp1kqRv-7K0k&usqp=CAU ",
        src2:"https://www.teamlab.art/images/sp-m/14591",
        src3:"https://www.guildhall.org/wp-content/uploads/2018/11/19_02_10_0498.jpg",
        src4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3aahumDP-VHw5Xy-ULR7Sb3GRihFOz24CZhZMNuNkd-SSbu98YzKjXoOeoMqa-kRddg&usqp=CAU",
  },

  {
    id : 2 ,
     eventName : "Sports",
     details :"  A national sports culture that raises the public taste of society and contributes to nurturing creativity at the local, regional and international levels.Advance Saudi sports by creating an appropriate sports environment open to the world that supports sports and athletes.  ",
    src:"https://saudigazette.com.sa/uploads/images/2020/11/05/1657896.jpg",

    src1:"https://upload.wikimedia.org/wikipedia/commons/f/f1/Sports_current_event.svg",
    src2:"https://ibsacademy.org/U/c/sport-event-management.jpg",
    src3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75lcTeULuFlKBgGb-ysKyaxzgGN-wlez9Fw&usqp=CAU",
    src4:"https://www.pledgesports.org/wp-content/uploads/2019/07/olympia-1543733_1280-1024x682.jpg",
},


{
  id : 3 ,
   eventName : "Cinema",
   details :"The way we characterize our cinemas is essential to meet the expectations of our guests.  We customize each cinema location for the surrounding market and the preferences of our guests by offering a mix of different cinematic experiences from exciting 4DX to luxurious experiences.",
  src:"https://cdn.concreteplayground.com/content/uploads/2020/07/Event-Cinemas_auditorium_supplied.jpg",
  src1:"https://media.spacebase.com/media/cache/spaces/8658/events-cinema-robina_1280.jpg",
  src2:"https://www.albayan.ae/polopoly_fs/1.4081774.1612236063!/image/image.jpg_gen/derivatives/rectangular_440/image.jpg",
  src3:"https://www.liverpoolchampion.com.au/images/transform/v1/crop/frm/XyDK2mdecfTpQsAbSqFiUd/56b8f72a-c09b-4c43-a248-a87cee802233.jpg/r0_442_8688_5351_w1200_h678_fmax.jpg",
  src4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEEUjIQBQ3jYjTzrdYvee2N43GmBUAPKuVA&usqp=CAU",
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

