function save_options() {

  localStorage['ytHighPref'] = document.getElementById("highpref").checked;
  if(localStorage['ytHighPref'] === "true")
  chrome.extension.getBackgroundPage().highpref = true;
  else
  chrome.extension.getBackgroundPage().highpref = false;

  localStorage['ytPause'] = document.getElementById("pause").checked;
  if(localStorage['ytPause'] === "true")
  chrome.extension.getBackgroundPage().pause = true;
  else
  chrome.extension.getBackgroundPage().pause = false;

  localStorage['ytSmartSave'] = document.getElementById("smart_save").checked;
  if(localStorage['ytSmartSave'] === "true")
  chrome.extension.getBackgroundPage().smart_save = true;
  else
  chrome.extension.getBackgroundPage().smart_save = false;

  localStorage['ytSpeed'] = document.getElementById('speed').value;
  chrome.extension.getBackgroundPage().speed = localStorage['ytSpeed'];
}

function restore_options() {
  var speed = localStorage['ytSpeed'];
  document.getElementById('speed').value = speed;

  var highpref = localStorage["ytHighPref"];
  if(highpref === "true")
  document.getElementById("highpref").checked = true;
  else
  document.getElementById("highpref").checked = false;

  var pause = localStorage["ytPause"];
  if(pause === "true")
  document.getElementById("pause").checked = true;
  else
  document.getElementById("pause").checked = false;

  var smart_save = localStorage["ytSmartSave"];
  if(smart_save === "true")
  document.getElementById("smart_save").checked = true;
  else
  document.getElementById("smart_save").checked = false;

}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#highpref').addEventListener('change', save_options);
document.querySelector('#pause').addEventListener('change', save_options);
document.querySelector('#speed').addEventListener('change', save_options);
document.querySelector('#smart_save').addEventListener('change', save_options);
