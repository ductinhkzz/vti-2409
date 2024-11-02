$(document).ready(function () {
  $('#header').load('layouts/header.html');
  $('#form-login').submit(function (e) {
    e.preventDefault();
    const formArray = $(this).serializeArray();
    const formData = {};
    for (const item of formArray) {
      formData[item.name] = item.value;
    }

    const formLogin = {
      identifier: formData.username,
      password: formData.password,
    };

    $.ajax({
      method: 'POST',
      url: 'http://localhost:1337/api/auth/local',
      credentials: 'include',
      data: formLogin,
      success: function (result) {
        localStorage.setItem('jwt', result.jwt);
        localStorage.setItem('userData', JSON.stringify(result.user));
        location.href = '/jquery/index.html';
      },
    });
  });
});
