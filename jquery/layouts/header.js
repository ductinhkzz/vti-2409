$(document).ready(function () {
  const loginRegisterBtn = $('#login-register')
  if (location.pathname.includes('login.html')) {
    loginRegisterBtn.attr('href', '/jquery/register.html')
    $('#login-register button').text('Register')
  }
});
