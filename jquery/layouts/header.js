$(document).ready(function () {
  const loginRegisterBtn = $('#login-register');
  if (location.pathname.includes('login.html')) {
    loginRegisterBtn.attr('href', '/jquery/register.html');
    $('#login-register button').text('Register');
  }

  const collectionNav = $('#collection-nav');
  const collectionSession = $('#collection-session ul');
  const collectionSessionContainer = $('#collection-session')

  $.ajax({
    url: `http://localhost:1337/api/collections?populate=*`,
    success: function (result) {
      const data = result.data;
      for (const item of data) {
        const slug =item.slug ?? '#'
        collectionNav.append(`
          <li class="nav-item">
            <a class="nav-link text-white" href="${slug}">${item.name}</a>
          </li>
        `)

        if (collectionSession.length > 0) {
          collectionSession.append(`
            <li class="col-2">
              <a href="${slug}" class="d-flex flex-column rounded align-items-center text-white text-decoration-none p-2">
                <div class="">
                  <img src="http://localhost:1337/${item.image.url}" alt="" />
                </div>
                <span class="p-2">${item.name}</span>
              </a>
            </li>
          `)
        }

        if (collectionSessionContainer.length > 0) {
          collectionSessionContainer.after(`
            <section class="container my-5 py-2" id="${item.documentId}">
              <h1 class="text-center text-white my-5 fs-3">${item.name}</h1>
            </section>
          `)

          $(`#${item.documentId}`).load("sessions/collection.html");
        }
      }
    },
  });
});
