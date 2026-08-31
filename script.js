// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(e){
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var status = document.getElementById('form-status');

  if(!name || !email || !message){
    status.textContent = 'Please complete all fields.';
    return;
  }

  var subject = encodeURIComponent('Portfolio contact from ' + name);
  var body = encodeURIComponent(
    'Name: ' + name +
    '\nEmail: ' + email +
    '\n\n' + message
  );

  window.location.href = 'mailto:arsathkhan.in@gmail.com?subject=' + subject + '&body=' + body;
  status.textContent = 'Opening your mail client...';
}
