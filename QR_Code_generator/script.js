function GenerateQr() {
  var inputText = document.getElementById("InputForQr").value;
  var qr = new QRCode(document.getElementById("qrcode"), {
    text: inputText,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  const GenerateNewBtn = document.createElement("button");
  GenerateNewBtn.className = "GenNew";
  const textNode = document.createTextNode("Generate New");
  GenerateNewBtn.appendChild(textNode);
  document.getElementById("genother").appendChild(GenerateNewBtn);
  const ImgTags = document.getElementsByTagName("img");

  if (ImgTags.length > 0) {
    document.getElementById("GenerateQRBtn").disabled = true;
  }
}

function ClearQR() {
    window.location.reload();
}
