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
// // next
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
  var number = parseInt(document.getElementById('task-count').textContent);
  number++;
  document.getElementById('task-count').textContent = number;
  var number = parseInt(document.getElementById('task-count-2').textContent);
  number--;
  document.getElementById('task-count-2').textContent = number;
});

 

