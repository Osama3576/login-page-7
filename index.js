document.addEventListener('DOMContentLoaded', function () {
  const authContainer = document.querySelector('.auth-container');

  function updateAuthTransition() {
    if (window.location.pathname.includes('login')) {
      authContainer.classList.remove('signup');
      authContainer.classList.add('login');
    } else if (window.location.pathname.includes('signup')) {
      authContainer.classList.remove('login');
      authContainer.classList.add('signup');
    }
  }

  // Initial load
  updateAuthTransition();

  // Handle link clicks or manual URL changes
  window.addEventListener('popstate', updateAuthTransition);
});

document
  .querySelector('.auth-link')
  .addEventListener('click', function (e) {
    e.preventDefault();
    authContainer.classList.add('signup'); // Assuming going to signup
    setTimeout(() => {
      window.location.href = e.target.href;
    }, 500); // Adjust this to match your CSS transition time
  });
