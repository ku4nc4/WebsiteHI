// JavaScript Document
var welcome = document.getElementById("welcome");
welcome.addEventListener(webkitAnimationEnd, function(event) {welcome.style.display = 'none' }, false);

var loading = document.getElementById("loading");
loading.addEventListener(webkitAnimationEnd, function(event) {loading.style.display = 'none' }, false);
