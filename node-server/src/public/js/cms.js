
function redirectToCMSLogin() {
    window.location = '/cms/login';
    return;
  }
  
  /**
   * validate user on page load
   */
   function isLoggedIn() {
    const token = getCookie('authToken');
    if (!token) {
      redirectToCMSLogin();
    }
    fetch('/user/me', {
      method: 'GET',
      headers: {"auth-token": token, "Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(response => {
      if (response.error) {
        redirectToCMSLogin();
      }
    })
    .catch(err => {
      console.log();
      redirectToCMSLogin();
    });
  };
  
  /**
   * login to cms
   */
   function login(e) {
    e.preventDefault();
    const form = document.querySelector(".login-form");
    const email = form.elements.uname.value;
    const password = form.elements.psw.value;
    fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(response => {
        setCookie('authToken', response.token, 7);
        window.location = "/cms";
    })
    .catch(err => console.log(err));
  }
  
  /**
   * Sign out
   */
  function onClickSignOut() {
    eraseCookie('authToken');
    redirectToCMSLogin();
  }
  
  
  function closeModel() {
    $('.modal').removeClass('open-model');
  }
  
  function openModel() {
    $('.modal').addClass('open-model');
  }