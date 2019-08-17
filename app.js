const alert = document.getElementById('alert');

alert.innerHTML = `
  <div class="alert-banner">
  <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
  to complete</p>
  <p class="alert-banner-close">&times;</p>
  </div>
`;

alert.addEventListener('click', e => {
  const clickedElement = e.target;
  const alertBanner = document.querySelector('.alert-banner');
  if(clickedElement.classList.contains('alert-banner-close')) {
    alertBanner.style.height = 0;
    alertBanner.style.padding = 0;
  }});
