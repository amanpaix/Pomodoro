
function decreaseB(obj) {
  if(!statusB) {
    let parent = obj.parentNode;
    let value = parseInt(parent.childNodes[3].innerHTML);
    if(value > 1) {
      value -= 1;
      parent.childNodes[3].innerHTML = value;
      document.getElementById("Btimer").innerHTML = value + ":00";
    }
  }
}
function increaseB(obj) {
  if(!statusB) {
    let parent = obj.parentNode;
    let value = parseInt(parent.childNodes[3].innerHTML);
    value += 1;
    parent.childNodes[3].innerHTML = value;
    document.getElementById("Btimer").innerHTML = value + ":00";
  }
}
function decreaseS(obj) {
  if(!statusS) {
    let parent = obj.parentNode;
    let value = parseInt(parent.childNodes[3].innerHTML);
    if(value > 1) {
      value -= 1;
      parent.childNodes[3].innerHTML = value;
      document.getElementById("Stimer").innerHTML = value + ":00";
    }
  }
}
function increaseS(obj) {
  if(!statusS) {
    let parent = obj.parentNode;
    let value = parseInt(parent.childNodes[3].innerHTML);
    value += 1;
    parent.childNodes[3].innerHTML = value;
    document.getElementById("Stimer").innerHTML = value + ":00";

  }
}

let myVarS;
let myVarB;
let statusS = false;
let statusB = false;

function getBreakTime() {
  return document.getElementById("Btimer").innerHTML;
}

function getSessionTime() {
  return document.getElementById("Stimer").innerHTML;
}

function getBreak() {
  return document.getElementById("break").innerHTML;
}

function getSession() {
  return document.getElementById("session").innerHTML;
}

function stopFunctionS() {
  clearInterval(myVarS);
}

function stopFunctionB() {
  clearInterval(myVarB);
}

function timerS() {
  let currentTime = getSessionTime();
  currentTime = currentTime.split(":");
  let minute = currentTime[0];
  let second = currentTime[1];
  second = second - 1;
  if(second < 0) {
    minute = minute - 1;
    second = 59;
  }
  if(second < 10) {
    second = "0" + second;
  }
  if(minute < 0) {
    statusS = false;
    minute = getSession();
    second = 0;
    document.getElementById("Stimer").innerHTML = minute + ":00";
    document.getElementById("clockB").classList.remove('hidden');
    document.getElementById("clockS").classList.add('hidden');
    stopFunctionS();
    B();
  }
  document.getElementById("Stimer").innerHTML = minute + ":" + second;
}

function timerB() {
  let currentTime = getBreakTime();
  currentTime = currentTime.split(":");
  let minute = currentTime[0];
  let second = currentTime[1];
  second = second - 1;
  if(second < 0) {
    minute = minute - 1;
    second = 59;
  }
  if(second < 10) {
    second = "0" + second;
  }
  if(minute < 0) {
    statusB = false;
    minute = getBreak();
    second = 0;
    document.getElementById("Btimer").innerHTML = minute + ":00";
     document.getElementById("clockB").classList.add('hidden');
     document.getElementById("clockS").classList.remove('hidden');
    stopFunctionB();
    S();
  }
  document.getElementById("Btimer").innerHTML = minute + ":" + second;
}

document.getElementById("clockS").onclick = S;
function S() {
  statusS = !statusS;
  if(statusS) {
      myVarS = setInterval(function() { timerS(); }, 1000);
  } else {
    stopFunctionS();
  }
}

document.getElementById("clockB").onclick = B;
function B() {
  statusB = !statusB;
  if(statusB) {
      myVarB = setInterval(function() { timerB(); }, 1000);
  } else {
    stopFunctionB();
  }
}
