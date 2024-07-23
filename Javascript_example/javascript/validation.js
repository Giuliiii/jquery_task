function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function(){
      const name = forms[0].name.value;
      if (!(confirm(`${name}Sr. ¿Está seguro de que quiere enviarlo?`))) {
        alert("Cancelado.");
        return false;
      }
    };
  };
  
  window.onload = confirmSubmit;
  
  function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
      // El proceso SUBMIT se cancela antes de la bifurcación condicional.
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Correo electrónico no coincidente.")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");
        setTimeout(function() {
          form.removeChild(element);
        }, 3000);
      } else {
        // Si se encuentra una coincidencia, VUELVA A ENVIAR.
        form.submit();
      }
    });
  };
  
  window.onload = emailValidation;