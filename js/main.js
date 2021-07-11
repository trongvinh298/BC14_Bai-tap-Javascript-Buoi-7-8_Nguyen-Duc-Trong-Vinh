document.getElementById("submit").addEventListener("click", addNumber);
document.getElementById("unsubmit").addEventListener("click", clearNumber);

document
  .getElementById("sumPossitveNumb")
  .addEventListener("click", sumPossitveNumb);

document
  .getElementById("countPossitveNumb")
  .addEventListener("click", countPossitveNumb);

document.getElementById("minNumb").addEventListener("click", minNumb);

document
  .getElementById("minPossitiveNumb")
  .addEventListener("click", minPossitiveNumb);

document.getElementById("lastEven").addEventListener("click", lastEven);

document.getElementById("swapNumb").addEventListener("click", swapNumb);

document.getElementById("sortIncrease").addEventListener("click", sortIncrease);

document.getElementById("firstPrime").addEventListener("click", firstPrime);

document.getElementById("submitReal").addEventListener("click", addNumberReal);

document
  .getElementById("unsubmitReal")
  .addEventListener("click", clearNumberReal);

document.getElementById("countInt").addEventListener("click", countInt);

document.getElementById("compare").addEventListener("click", compare);

var divMainArray = document.getElementById("divMainArray");
var divMainArrayReal = document.getElementById("divMainArrayReal");

var mainArr = [];
var mainArrReal = [];

function addNumber() {
  var number = parseInt(document.getElementById("nhapSoNguyen").value);
  mainArr.push(number);
  var divMainArray = document.getElementById("divMainArray");
  divMainArray.innerHTML = mainArr.join(" , ");
}

function clearNumber() {
  mainArr.length = 0;
  divMainArray.innerHTML = mainArr;
}

function sumPossitveNumb() {
  var total = 0;
  for (var i = 0; i < mainArr.length; i += 1) {
    if (mainArr[i] > 0) {
      total += parseInt(mainArr[i]);
    }
  }
  alert(`Tổng các số dương trong mảng là ${total}`);
}

function countPossitveNumb() {
  var count = 0;
  for (var i = 0; i < mainArr.length; i += 1) {
    if (mainArr[i] > 0) {
      count += 1;
    }
  }
  alert(`Số lượng các số dương trong mảng là ${count}`);
}

function minNumb() {
  var min = mainArr[0];
  for (var i = 0; i < mainArr.length; i += 1) {
    if (mainArr[i] < min) {
      min = mainArr[i];
    }
  }
  alert(`Số nhỏ nhất trong mảng: ${min}`);
}

function minPossitiveNumb() {
  var newArr = mainArr.filter(function (n) {
    return n > 0;
  });

  var min = newArr[0];
  for (var i = 0; i < newArr.length; i += 1) {
    if (newArr[i] < min) {
      min = newArr[i];
    }
  }
  alert(`Số dương nhỏ nhất trong mảng: ${min}`);
}

function lastEven() {
  var newArr = mainArr.filter(function (n) {
    return n % 2 === 0;
  });
  if (newArr.length > 0) {
    alert(`Số chẵn cuối cùng trong mảng: ${newArr[newArr.length - 1]}`);
  } else {
    alert(`Số chẵn cuối cùng trong mảng: -1`);
  }
}

function swapNumb() {
  var n1 = parseInt(document.getElementById("swapPos1").value);
  var n2 = parseInt(document.getElementById("swapPos2").value);
  var newSwapArr = document.getElementById("newSwapArr");

  var new1 = mainArr[n2];
  var new2 = mainArr[n1];

  for (var i = 0; i < mainArr.length; i += 1) {
    if (i === n1) {
      mainArr[i] = new1;
    }
    if (i === n2) {
      mainArr[i] = new2;
    }
  }
  newSwapArr.innerHTML = `${mainArr.join(" , ")}`;
}

function sortIncrease() {
  var newSwapArr = document.getElementById("newSwapArr");
  var newArr = mainArr.sort(function (a, b) {
    return a - b;
  });
  newSwapArr.innerHTML = `${newArr.join(" , ")}`;
}

function firstPrime() {
  for (var i = 0; i < mainArr.length; i += 1) {
    if (mainArr[i] === 2) {
      alert("Số nguyên tố đầu tiên trong mảng là 2");
      return;
    } else {
      for (var j = 2; j < Math.sqrt(mainArr[i]); j += 2) {
        if (mainArr[i] % j === 0) {
          break;
        }
        alert(`Số nguyên tố đầu tiên trong mảng là ${mainArr[i]}`);
        return;
      }
    }
  }
}

function addNumberReal() {
  var numberReal = document.getElementById("nhapSoThuc").value;
  mainArrReal.push(numberReal);
  var divMainArrayReal = document.getElementById("divMainArrayReal");
  divMainArrayReal.innerHTML = mainArrReal.join(" , ");
}

function clearNumberReal() {
  mainArrReal.length = 0;
  divMainArrayReal.innerHTML = mainArrReal;
}

function countInt() {
  var count = 0;
  for (var i = 0; i < mainArrReal.length; i += 1) {
    if (mainArrReal[i] % 1 === 0) {
      count += 1;
    }
  }
  alert(`Trong mảng có ${count} số nguyên`);
}

function compare() {
  var countP = 0;
  var countN = 0;
  for (var i = 0; i < mainArrReal.length; i += 1) {
    if (mainArrReal[i] > 0) {
      countP += 1;
    }
    if (mainArrReal[i] < 0) {
      countN += 1;
    }
  }
  if (countP > countN) {
    alert(`Số lượng số dương (${countP}) nhiều hơn số âm (${countN})`);
  } else if (countP < countN) {
    alert(`Số lượng số âm (${countN}) nhiều hơn số dương (${countP})`);
  } else {
    alert(`Số lượng số dương và số âm bằng nhau (${countP})`);
  }
}
