var counter = document.getElementById("counter");
var btn = document.getElementById("btn");
var up_clicks = document.getElementById("up_clicks");
var value_per_click = document.getElementById("value_per_click");
var all_time_clicks = document.getElementById("all_time_clicks");
var upgrades_bought = document.getElementById("upgrades_bought");
var value = 1;
var cost = 10;

function changeColor() {
  if (counter.innerHTML < parseInt(up_clicks.innerHTML.split(":")[1].trim())) {
    up_clicks.style.background = "#a83253";
  } else {
    up_clicks.style.background = "#32a85e";
  }
}

btn.addEventListener("click", function () {
  counter.innerHTML = parseInt(counter.innerHTML) + value;
  all_time_clicks.innerHTML =
    "All time clicks: " +
    (parseInt(all_time_clicks.innerHTML.split(":")[1].trim()) + value);
  changeColor();
});
up_clicks.addEventListener("click", function () {
  if (parseInt(counter.innerHTML) < cost) {
    var zen = prompt("Not enough value to buy");
    alert(zen);
  } else {
    value_per_click.innerHTML =
      "Value per click: " +
      (parseInt(value_per_click.innerHTML.split(":")[1].trim()) + 1);
    counter.innerHTML = parseInt(counter.innerHTML) - cost;
    upgrades_bought.innerHTML =
      "Upgrades bought: " +
      (parseInt(upgrades_bought.innerHTML.split(":")[1].trim()) + 1);
    changeColor();
    value++;
  }
});
