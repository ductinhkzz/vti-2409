$(document).ready(function () {
  $("#header").load("layouts/header.html");

  /**
   * Handle form submit
   */
  $('#form-register').submit(function (e) {
    e.preventDefault();
    const formArray = $(this).serializeArray();
    const formData = {}
    for (const item of formArray) {
      formData[item.name] = item.value;
    }

    $.ajax({
      method: 'POST',
      url: 'http://localhost:1337/api/auth/local/register',
      data: formData,
      success: function() {
        location.href = '/jquery/login.html'
      }
    })
  })
});
