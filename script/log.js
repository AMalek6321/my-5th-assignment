const btn = document.getElementById('changeColorBtn');
const body = document.body;

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener('click', () => {
  body.style.backgroundColor = getRandomColor();
});
// // card 1
document.getElementById('shop-ease-btn').addEventListener('click', function() {
  alert('Board Updated Successfully!');
  this.disabled = true;
  var newElement = document.createElement('p');
  newElement.textContent = 'You have completed the task Fix Mobile Button Issue';
  var currentTime = new Date();
  newElement.textContent += ' at ' + currentTime.toLocaleString();
  document.getElementById('text-add').appendChild(newElement);
  newElement.style.backgroundColor = 'white';
  newElement.style.borderRadius = '10px';
  newElement.style.textAlign = 'center';
  newElement.style.padding = '4px';
  newElement.style.margin = '12px';
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});
// card 2
document.getElementById('soft-pay-btn').addEventListener('click', function() {
  alert('Board Updated Successfully!');
  this.disabled = true;
  var newElement = document.createElement('p');
  newElement.textContent = 'You have completed the task Add Pay Success Modal';
  var currentTime = new Date();
  newElement.textContent += ' at ' + currentTime.toLocaleString();
  document.getElementById('text-add').appendChild(newElement);
  newElement.style.backgroundColor = 'white';
  newElement.style.borderRadius = '10px';
  newElement.style.textAlign = 'center';
  newElement.style.padding = '4px';
  newElement.style.margin = '12px';
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});

// card 3
document.getElementById('meta-btn').addEventListener('click', function() {
  alert('Board Updated Successfully!');
  this.disabled = true;
  var newElement = document.createElement('p');
  newElement.textContent = 'You have completed the task Add new reaction';
  var currentTime = new Date();
  newElement.textContent += ' at ' + currentTime.toLocaleString();
  document.getElementById('text-add').appendChild(newElement);
  newElement.style.backgroundColor = 'white';
  newElement.style.borderRadius = '10px';
  newElement.style.textAlign = 'center';
  newElement.style.padding = '4px';
  newElement.style.margin = '12px';
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});

// card 4
document.getElementById('prog-hero-btn').addEventListener('click', function() {
  alert('Board Updated Successfully!');
  this.disabled = true;
  var newElement = document.createElement('p');
  newElement.textContent = 'You have completed the task Fix Video Loading Issue';
  var currentTime = new Date();
  newElement.textContent += ' at ' + currentTime.toLocaleString();
  document.getElementById('text-add').appendChild(newElement);
  newElement.style.backgroundColor = 'white';
  newElement.style.borderRadius = '10px';
  newElement.style.textAlign = 'center';
  newElement.style.padding = '4px';
  newElement.style.margin = '12px';
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});

// card 5
document.getElementById('google-btn').addEventListener('click', function() {
  alert('Board Updated Successfully!');
  this.disabled = true;
  var newElement = document.createElement('p');
  newElement.textContent = 'You have completed the task Integrate AI search';
  var currentTime = new Date();
  newElement.textContent += ' at ' + currentTime.toLocaleString();
  document.getElementById('text-add').appendChild(newElement);
  newElement.style.backgroundColor = 'white';
  newElement.style.borderRadius = '10px';
  newElement.style.textAlign = 'center';
  newElement.style.padding = '4px';
  newElement.style.margin = '12px';
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});

// card 6
document.getElementById('polygon-btn').addEventListener('click', function() {
  alert('Board Updated Successfully!');
  alert('Congrates!!! You have completed the All task');
  this.disabled = true;
  var newElement = document.createElement('p');
  newElement.textContent = 'You have completed the task Fix Review Ami Probashi Site';
  var currentTime = new Date();
  newElement.textContent += ' at ' + currentTime.toLocaleString();
  document.getElementById('text-add').appendChild(newElement);
  newElement.style.backgroundColor = 'white';
  newElement.style.borderRadius = '10px';
  newElement.style.textAlign = 'center';
  newElement.style.padding = '4px';
  newElement.style.margin = '12px';
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});

// click card

document.getElementById('click-card').addEventListener('click', function() {
 
    window.location.href = "./script/dev.html";
});


//  History clear

docoment.getElementById('clear-btn').addEventListener('click', function() {

document.getElementById("text-area").innerHTML = "";
});
    

// new html page


