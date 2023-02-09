  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  setInterval(function () {
    var agora = new Date();
    let hora = agora.getHours();
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds();
    hours.innerHTML = hora;
    minutes.innerHTML = minutos;
    seconds.innerHTML = segundos;
     if (minutos < 10) {
       minutes.innerHTML = "0"+minutos;
       seconds.innerHTML = "0"+segundos;
     }
    
 }, 1001);


 var agora = new Date();
 let hora = agora.getHours();

 if(hora>18){
    document.body.classList.toggle("dark");
 }






   





 

 
  

