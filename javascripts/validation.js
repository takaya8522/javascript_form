function emailValidation() {
  const form = document.getElementById('form');
  const change = document.getElementById('email_confirm');
  const add = document.getElementById('add');
  const element = document.createElement('p');
  const message = document.createTextNode("Eメールが一致しません");
  element.appendChild(message);
  element.classList.add("alert");
  change.addEventListener('change', () => {
    if(form.email.value !== form.email_confirm.value) {
      add.parentNode.insertBefore(element, add);
      change.classList.add("alert_background");
    } else {
      element.parentNode.removeChild(element);
      change.classList.remove("alert_background");
    }
  });
};

window.onload = emailValidation;