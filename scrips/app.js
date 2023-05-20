function validarDatos(){
    const nombre=document.getElementById("nombre")
    const email=document.getElementById("email")
    const mensaje=document.getElementById("mensaje")
    //const form =document.getElementById("form")
    
    let entrar=false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
      //valido el nombre
     
      if (nombre.value.length == 0 || nombre.value=='') {
        alert("El Nombre no es valido.")
          entrar=true
      } 
      
      if (!regexEmail.test(email.value) ){
        alert("El Email no es valido.")
        entrar=true
      }
  
      if (mensaje.value.length == 0 || mensaje.value=='') {
        alert("El Mensaje no es valido.")
         entrar=true
    } 
  
   }