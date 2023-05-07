function changeColor() {
  if (parseInt(counter.innerHTML) < cost) {
    up_clicks.style.background = "#a83253";
    buy_all.style.background = "#a83253";
  } else {
    up_clicks.style.background = "#32a85e";
    buy_all.style.background = "#32a85e";
  }
}

function increase_value_per_click(val = 1) {
  js_value_per_click += val;
  value_per_click.innerHTML = "Value per click: " + js_value_per_click;
}

function increase_cost(iter = 1) {
  for (let i = 0; i < iter; i++) {
    cost = Math.ceil(cost * 1.5);
  }
  up_clicks.innerHTML = "+1 per click<br />Cost: " + cost;
}

function check_record() {
  if (parseInt(counter.innerHTML) >= 10 ** 6) {
    if (win === 0) {
      alert("Congratulations! You won the game!");
      alert("Screen your record and send it to developer!");
      bg_img.style.display = "block";
      win++;
    }
  }
}

function buy() {
  var count = 0;
  for (counter.innerHTML; counter.innerHTML >= cost; count++) {
    counter.innerHTML -= cost;
    cost = Math.ceil(cost * 1.5);
  }
  js_value_per_click += count;
  js_upgrades_bought += count;
  value += count;
  up_clicks.innerHTML = "+1 per click<br />Cost: " + cost;
  value_per_click.innerHTML = "Value per click: " + js_value_per_click;
  upgrades_bought.innerHTML = "Upgrades bought: " + js_upgrades_bought;
}

function changeLangAlert() {
  if (isNaN(counter.innerHTML)) {
    alert("Please, don't change language, stay in english");
    location.reload();
  }
}

function reset() {
  clicks = 0;
  value = 1;
  cost = 10;
  win = 0;
  counter.innerHTML = 0;
  js_value_per_click = 1;
  js_all_time_clicks = 0;
  js_absolute_value_of_clicks = 0;
  js_upgrades_bought = 0;
  up_clicks.innerHTML = "+1 per click<br />Cost: 10";
  value_per_click.innerHTML = "Value per click: 1";
  all_time_clicks.innerHTML = "All time clicks: 0";
  absolute_value_of_clicks.innerHTML = "Absolute value of clicks: 0";
  upgrades_bought.innerHTML = "Upgrades bought: 0";
}

var counter = document.getElementById("counter");
var btn = document.getElementById("btn");
var up_clicks = document.getElementById("up_clicks");
var buy_all = document.getElementById("buy_all");
var value_per_click = document.getElementById("value_per_click");
var all_time_clicks = document.getElementById("all_time_clicks");
var absolute_value_of_clicks = document.getElementById(
  "absolute_value_of_clicks"
);
var upgrades_bought = document.getElementById("upgrades_bought");
var bg_img = document.getElementById("background_img");

var clicks = 0;
var value = 1;
var cost = 10;
var win = 0;
var js_value_per_click = 1;
var js_all_time_clicks = 0;
var js_absolute_value_of_clicks = 0;
var js_upgrades_bought = 0;

btn.addEventListener("click", function () {
  changeLangAlert();
  if (parseInt(counter.innerHTML) > clicks) {
    alert("Please don't cheat!");
    reset();
  } else {
    counter.innerHTML = parseInt(counter.innerHTML) + value;
    js_all_time_clicks += value;
    all_time_clicks.innerHTML = "All time clicks: " + js_all_time_clicks;
    js_absolute_value_of_clicks++;
    absolute_value_of_clicks.innerHTML =
      "Absolute value of clicks: " + js_absolute_value_of_clicks;
    changeColor();
    check_record();
    clicks = parseInt(counter.innerHTML);
  }
});

up_clicks.addEventListener("click", function () {
  changeLangAlert();
  if (parseInt(counter.innerHTML) < cost) {
    alert("Not enough value to buy");
  } else {
    counter.innerHTML = parseInt(counter.innerHTML) - cost;
    increase_cost();
    increase_value_per_click();
    js_upgrades_bought++;
    upgrades_bought.innerHTML = "Upgrades bought: " + js_upgrades_bought;
    changeColor();
    value++;
  }
});

buy_all.addEventListener("click", function () {
  changeLangAlert();
  if (parseInt(counter.innerHTML) < cost) {
    alert("Not enough value to buy");
  } else {
    buy();
    changeColor();
  }
});
