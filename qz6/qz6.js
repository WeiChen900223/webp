setInterval(function(){
  var today = new Date();
  document.getElementById('clock').innerHTML =today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
},100);