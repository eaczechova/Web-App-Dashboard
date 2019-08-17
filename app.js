const notificationIcon = document.getElementById('notification-alert');
const notificationList = document.querySelector('.notification-list');
const bellIcon = document.querySelector('.header-bell-icon');
let counter = 0;

bellIcon.addEventListener('click', e => {
  notificationList.style.display = 'flex';


});

bellIcon.addEventListener('click', e => {
  const clickedElement = e.target;
  const numberOfNotofication = notificationList.children.length;

  if(clickedElement.classList.contains('notification-close')) {
    e.target.parentElement.style.display = 'none';
    counter++;
  }
  console.log(counter);
  console.log(numberOfNotofication);


  if(counter === numberOfNotofication ) {
      notificationIcon.style.display = 'none';
  }
});

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
