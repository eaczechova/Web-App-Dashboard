const notificationIcon = document.getElementById('notification-alert');
const notificationList = document.querySelector('.notification-list');
const bellIcon = document.querySelector('.header-bell-icon');
const numberOfNotofication = notificationList.children.length;
let counter = numberOfNotofication;

bellIcon.addEventListener('click', e => {
  if(e.target.classList.contains('notification-alert')) {
    if(notificationList.style.display === 'none') {
      notificationList.style.display = 'flex';
    } else {
      notificationList.style.display = 'none';
    }
  }
});

bellIcon.addEventListener('click', e => {

  const clickedElement = e.target;
  const numberOfNotofication = notificationList.children.length;

  if(clickedElement.classList.contains('notification-close')) {
    e.target.parentElement.style.display = 'none';
    counter--;
  }
  console.log(counter);
  console.log(numberOfNotofication);


  if(counter === 0 ) {
    notificationIcon.style.display = 'none';
  }
});

const alert = document.getElementById('alert');

alert.innerHTML = `
  <div class="alert-banner">
  <p><strong>Alert:</strong> You have <strong>${counter}</strong> overdue tasks
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

// CHARTS //

// line chart //

let trafficCanvas = document.getElementById('traffic-chart');

// hourly //

let trafficDataHourly = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    tension: 0,
    label: false,
    pointBorderColor: 'rgb(96, 97, 177)',
    pointRadius: 6,
    pointBackgroundColor: 'white',
  }]
};

// daily //

let trafficDataDaily = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [{
    data: [750, 1850, 1000, 2250, 1500, 1750, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    tension: 0,
    label: false,
    pointBorderColor: 'rgb(96, 97, 177)',
    pointRadius: 6,
    pointBackgroundColor: 'white',
  }]
};

// weekly

let trafficDataWeekly = {
  labels: ['Week-1', 'Week-2', 'Week-3', 'Week-4', 'Week-5', 'Week-6', 'Week-7', 'Week-8'],
  datasets: [{
    data: [7540, 3850, 7800, 4550, 7500, 8750, 8500, 7836],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    tension: 0,
    label: false,
    pointBorderColor: 'rgb(96, 97, 177)',
    pointRadius: 6,
    pointBackgroundColor: 'white',
  }]
};

// monthly //

let trafficDataMonthly = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [{
    data: [7500, 12250, 13400, 20900, 14500, 17500, 13250, 18950, 23250, 15300, 25400, 29250],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    tension: 0,
    label: false,
    pointBorderColor: 'rgb(96, 97, 177)',
    pointRadius: 6,
    pointBackgroundColor: 'white',
  }]
};

let trafficOptions = {
  maintainAspectRatio: false,
  aspectRatio: 1.2,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
  display: false
  },
  min: 500,
  max: 2500
};

loadChartData = (foo) => {
  var myChart = new Chart(trafficCanvas, {
      type: 'line',
      data: foo,
      options: trafficOptions
  });
}

const trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click', (e) => {
  let selectedClass = document.querySelector('.selected');
  selectedClass.classList.remove('selected');
  if(e.target.innerText === 'Daily') {
    loadChartData(trafficDataDaily);
    e.target.classList.add('selected');
  } else if (e.target.innerText === 'Monthly') {
    loadChartData(trafficDataMonthly);
    e.target.classList.add('selected');
  } else if (e.target.innerText === 'Weekly') {
    loadChartData(trafficDataWeekly);
    e.target.classList.add('selected');
  } else if (e.target.innerText === 'Hourly') {
    loadChartData(trafficDataHourly);
    e.target.classList.add('selected');
  }
});

// bar chart //

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// doughnut chart //

const mobileCanvas = document.getElementById('mobile-chart');
const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
  label: '# of Users',
  data: [2000, 550, 500],
  borderWidth: 0,
  backgroundColor: [
  '#7477BF',
  '#78CF82',
  '#51B6C8'
  ]
  }]
};

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: {
      maintainAspectRatio: false,
      aspectRatio: 1.2,
  		legend: {
  			position:'right',
  			labels: {
  				boxWidth: 10
  			}
  		}
  	}
});

// Messaging Section

const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');


send.addEventListener('click', function(e) {
  e.preventDefault();
  let userInput = user.value;
  let messageInput = message.value;
  if(userInput.length === 0 && messageInput.length === 0) {
    user.style.border = '1px solid red';
    message.style.border = '1px solid red';
    window.alert('User name and message text are missing.');
  } else if (userInput.length === 0) {
    user.style.border = '1px solid red';
    window.alert('User name is missing.')
  } else if (messageInput.length === 0) {
    message.style.border = '1px solid red';
    window.alert('Message text is missing.');
  } else {
    window.alert(`Your message has been sent successfully to ${userInput}!`);
    message.style.border = '1px solid lightgrey';
    user.style.border = '1px solid lightgrey';
  }
});

// AUTOCOMPLETE

let arrayOfMembers = [];
const memeberTags = document.querySelectorAll('.members-text p');
for (let i = 0 ; i < memeberTags.length; i++ ) {
  arrayOfMembers.push(memeberTags[i].innerText.split(' '));
}

const userInputField = document.getElementById('userField');


userInputField.addEventListener('keyup', (e) => {
  if(e.keyCode === 8 || e.keyCode === 46) {
    userInputField.value = '';
  } else {
    let userInput = userInputField.value.toLowerCase();
    for(let i = 0 ; i < arrayOfMembers.length; i++ ) {
      if(userInput === arrayOfMembers[i][0].toLowerCase() || userInput === arrayOfMembers[i][1].toLowerCase()) {
        let match = arrayOfMembers[i].join(' ');
        userInputField.value = arrayOfMembers[i].join(' ');
      }
    }
  }
});

// SETTINGS

// Time Zones Selection

let timeZonesList = document.getElementById('timezone');
let timeZoneSelected;
let optionsList = document.querySelectorAll('option');
timeZonesList.addEventListener('change', (e) => {

  timeZoneSelected = timeZonesList.value;
  for(let i = 0; i < optionsList.length; i++ ) {

    if(optionsList[i].hasAttribute('selected')) {
      optionsList[i].removeAttribute('selected');
    }
    if(optionsList[i].textContent == timeZoneSelected) {
      optionsList[i].setAttribute('selected', 'selected');
      localStorage.setItem('timeZone', JSON.stringify(timeZoneSelected));
    }
  }
  //
  // console.log(v.parentNode);
  // timeZonesList.options[timeZonesList.selectedIndex].setAttribute('selected', 'selected');
  // timeZoneSelected = timeZonesList.options[timeZonesList.selectedIndex];
  // localStorage.setItem('timeZone', timeZonesList.options[timeZonesList.selectedIndex]);
  //
  // let test = localStorage.getItem('timeZone');
  // console.log(test);
});

function supportLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  }
  catch {
    return false;
  }
}


window.onload = function() {
  loadChartData(trafficDataHourly);
  let timeZoneSet = localStorage.getItem('timeZone');
  let optionsList = document.querySelectorAll('option');

  for(let i = 0; i < optionsList.length; i++ ) {
    if(optionsList[i].hasAttribute('selected')) {
      optionsList[i].removeAttribute('selected');
    }
    if(optionsList[i].textContent == JSON.parse(timeZoneSet)) {

      optionsList[i].setAttribute('selected', 'selected');
    }
  }
  // console.log(timeZoneSet);
  // LOCAL STORAGE
  if(supportLocalStorage()) {

    // console.log(localStorage.timezone);
    //timezones

  let slider1Value = document.querySelector('.switch-light');
  const checkedElement = document.querySelector('.switch-light input');

  slider1Value.addEventListener('click', (e) => {
    if(checkedElement.checked === true) {
      console.log("If element is checked:" ,checkedElement.checked);
      checkedElement.checked = false;
    } else if (checkedElement.checked === false) {
      checkedElement.checked = true;
      console.log("If element is NOT checked:" ,checkedElement.checked);
    }
  });
}
  // console.log(localStorage.timezone);

};
