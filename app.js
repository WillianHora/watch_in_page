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
       }
     if(segundos<10){
         seconds.innerHTML = "0" + segundos;
     }
    
 }, 1001);


 var agora = new Date(); 
 let hora = agora.getHours();


 if(hora>=4 && hora<=15){
    document.body.classList.toggle("light");
 } else if (hora>=16 && hora<18){
  document.body.classList.toggle("mid");
 }else if (hora>=18 || hora<=3){
  document.body.classList.toggle("dark");
 }






   





 

 
  

