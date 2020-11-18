let d = document;
let range = d.querySelectorAll('.range');
let box = d.querySelector('.color-box');
let red = d.querySelector('#r');
let green = d.querySelector('#g');
let blue = d.querySelector('#b');
let red_out = d.querySelector('#r_out');
let green_out = d.querySelector('#g_out');
let blue_out = d.querySelector('#b_out');
let onSlidersBlockToggle = d.querySelector('.showBtn');
let rgbRange = d.querySelector('.rgb-range');
let colorValue = '';
let defaultColor = 'rgb(255,255,255)';
let submit = d.querySelector('.submit-btn');
let cancel = d.querySelector('.cancel-btn');

onSlidersBlockToggle.addEventListener('click', () => rgbRange.classList.toggle('rgb-range'));

function onChange() {
  colorValue = 'rgb(' + red.value + ',' + green.value + ',' + blue.value + ')';
}

for (i = 0; i < range.length; i++) {
  range[i].addEventListener('change', function (e) {
    onChange();
    let targetParent = e.target.closest('.fieldset');
    let target_output = targetParent.querySelector('.range_out');
    target_output.value = e.target.value;
  });
}

submit.addEventListener('click', function () {
  box.style.backgroundColor = colorValue;
  rgbRange.classList.toggle('rgb-range');
});

cancel.addEventListener('click', function () {
  red.value = 0;
  green.value = 0;
  blue.value = 0;
  red_out.value = 0;
  green_out.value = 0;
  blue_out.value = 0;
  colorValue = defaultColor;
  box.style.backgroundColor = defaultColor;
});