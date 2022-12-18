let Input = document.getElementById("input");
let Total = document.getElementById("total");
let Zodd = document.getElementsByClassName("zodd");
let ghuss = document.getElementById("thev");
let sun = document.getElementById("sun");
function display(num) {
  kill = Input.value += num;
  vinay = eval(kill);
  Total.value = vinay;
  if (Total.value == "Infinity" || Total.value == "NaN" || Total.value == "undefined") {
    Total.value = "Chutiya hai kya tu..?";
    Total.style.fontSize = "15px";
    Total.style.width = "55%";
    Total.style.textAlign = "center";
    Total.style.marginRight = "22px";
    Zodd.style.justifyContent = "center";
  }

  else {
    Total.style.fontSize = "22px";
    Total.style.width = "30%";
    Total.style.textAlign = "right";
  }
}

function thev() {
  Input.value = "";
  Total.value = "";
  Total.style.fontSize = "22px";
  Total.style.width = "30%";
  Total.style.textAlign = "right";
  Zodd.style.justifyContent = "right";
}

function delet() {
  Input.value = Input.value.slice(0, -1);
  Total.value = eval(Input.value);
  if (Total.value == "undefined") {
    Total.value = "";
  }
  else if (Total.value == "Infinity") {
    Total.value = "Chutiya hai kya tu..?";
    Total.style.fontSize = "15px";
    Total.style.width = "55%";
    Total.style.textAlign = "center";
    Total.style.marginRight = "22px";
    Zodd.style.justifyContent = "center";
  }

  else {
    Total.style.fontSize = "22px";
    Total.style.width = "30%";
    Total.style.textAlign = "right";
    Zodd.style.justifyContent = "right";
  }
}

function dark() {
  document.body.classList.toggle("darker");
  ghuss.classList.toggle("ball2");
}