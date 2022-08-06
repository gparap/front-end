// Copyright (c) 2022 gparap
// Light Bulb Switcher

function toggle() {
  let bulb = document.getElementById('bulb');
  let button = document.getElementById('toggle-button');

  //turn on or off the bulb
  if (button.innerHTML === 'OFF') {
    bulb.src = 'bulb_on.png';
    button.innerHTML = 'ON';
  }
  else {
    bulb.src = 'bulb_off.png';
    button.innerHTML = 'OFF';
  }
}
