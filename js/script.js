function changeColor() {
  if (counter.innerHTML < parseInt(up_clicks.innerHTML.split(":")[1].trim())) {
    up_clicks.style.background = "#a83253";
    buy_all.style.background = "#a83253";
  } else {
    up_clicks.style.background = "#32a85e";
    buy_all.style.background = "#32a85e";
  }
}

function increase_value_per_click(val = 1) {
  value_per_click.innerHTML =
    "Value per click: " +
    (parseInt(value_per_click.innerHTML.split(":")[1].trim()) + val);
}

function increase_upgrades_bought(val = 1) {
  upgrades_bought.innerHTML =
    "Upgrades bought: " +
    (parseInt(upgrades_bought.innerHTML.split(":")[1].trim()) + val);
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

var value = 1;
var cost = 10;

btn.addEventListener("click", function () {
  counter.innerHTML = parseInt(counter.innerHTML) + value;
  all_time_clicks.innerHTML =
    "All time clicks: " +
    (parseInt(all_time_clicks.innerHTML.split(":")[1].trim()) + value);
  absolute_value_of_clicks.innerHTML =
    "Absolute value of clicks: " +
    (parseInt(absolute_value_of_clicks.innerHTML.split(":")[1].trim()) + 1);
  changeColor();
});

up_clicks.addEventListener("click", function () {
  if (parseInt(counter.innerHTML) < cost) {
    alert("Not enough value to buy");
  } else {
    counter.innerHTML = parseInt(counter.innerHTML) - cost;
    increase_value_per_click();
    increase_upgrades_bought();
    changeColor();
    value++;
  }
});

buy_all.addEventListener("click", function () {
  if (parseInt(counter.innerHTML) < cost) {
    alert("Not enough value to buy");
  } else {
    let bought = Math.floor(counter.innerHTML / cost);
    counter.innerHTML -= bought * cost;
    value += bought;
    increase_value_per_click(bought);
    increase_upgrades_bought(bought);
    changeColor();
  }
});
