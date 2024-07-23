function emailValidation() {
    const form = document.getElementById('form');
    const emailInput = form.email;
    const emailConfirmInput = form.email_confirm;
    const errorElement = document.createElement('p')
  
    emailConfirmInput.addEventListener('input', function() {
      const email = emailInput.value.trim();
      const emailConfirm = emailConfirmInput.value.trim();
  
      if (email === emailConfirm) {
        errorElement.style.display = 'none';
        emailConfirmInput.style.backgroundColor = '';
        emailConfirmInput.style.color = '';
      } else {
        errorElement.textContent = "Email does not match";
        form.appendChild(errorElement);
        errorElement.style.color = "#d14539";
        errorElement.style.display = 'block';
        emailConfirmInput.style.backgroundColor = 'rgba(230, 169, 171, 0.5)';
        emailConfirmInput.style.color = '#d14539';
      }
    });
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (emailInput.value !== emailConfirmInput.value) {
        errorElement.style.display = 'block';
        emailConfirmInput.style.backgroundColor = 'rgba(230, 169, 171, 0.5)';
        emailConfirmInput.style.color = '#d14539';
      } else {
        errorElement.style.display = 'none';
        form.submit();
      }
    });
  }
  
  window.onload = emailValidation;
  