function Convert() {
  var textCapture = document.getElementById("inputText").value;
  var msg = new SpeechSynthesisUtterance();
  msg.text = textCapture;
  window.speechSynthesis.speak(msg);
}
