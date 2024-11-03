const formattedNumber = function (number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

$(document).ready(function () {
  const loginRegisterBtn = $('#login-register');
  if (location.pathname.includes('login.html')) {
    loginRegisterBtn.attr('href', '/jquery/register.html');
    $('#login-register button').text('Register');
  }

  const collectionNav = $('#collection-nav');
  const collectionSessionList = $('#colection-list');
  const collectionSession = $('#collection-session ul');

  $.ajax({
    url: `http://localhost:1337/api/collections?populate=*`,
    success: function (result) {
      const data = result.data;
      for (const item of data) {
        const slug = item.slug ?? '#';
        collectionNav.append(`
          <li class="nav-item">
            <a class="nav-link text-white" href="${slug}">${item.name}</a>
          </li>
        `);

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
          `);
        }

        if (collectionSessionList.length > 0) {
          collectionSessionList.append(`
            <section class="container my-5 py-2" id="${item.documentId}">
            </section>
          `);
          $(`#${item.documentId}`).append(`<ul class="row list"></ul>`);
          $(`#${item.documentId} ul`).before(`<h1 class="text-center text-white my-5 fs-3">${item.name}</h1>`);
          $.ajax({
            url: `http://localhost:1337/api/products?filters[category][collection][documentId][$eq]=${item.documentId}&populate[0]=category&populate[1]=category.collection&populate[2]=thumbnail&pagination[pageSize]=4`,
            success: function (result) {
              const data = result.data;
              data.forEach((product) => {
                $(`#${item.documentId} ul`).append(`
                   <li class="col-3 d-flex">
                    <a href="#" class="d-flex flex-column rounded-4 align-items-center text-white text-decoration-none px-2 py-4 w-100">
                      <div class="py-2">
                        <img src="http://localhost:1337/${product.thumbnail.url}" alt="" />
                      </div>
                      <span class="p-2">${product.name}</span>
                      <strong>${formattedNumber(product.price)}</strong>
                    </a>
                  </li>
                `);
              });
            },
          });
        }
      }
    },
  });

  const user = JSON.parse(localStorage.getItem('userData'));
  const navActions = $('#nav-actions');
  if (user) {
    loginRegisterBtn.hide();
    navActions.append(`
      <span class="text-white d-flex align-items-center me-2">${user.username}</span>  
      <button id="logout-btn" type="button" class="btn btn-outline-light btn-sm">Logout</button>
    `);
  } else {
    loginRegisterBtn.show();
  }

  $('#logout-btn').click(function () {
    localStorage.clear();
    location.href = '/jquery/index.html';
  });
});
