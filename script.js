function criptografar() {
     var inputText = document.getElementById("inputText").value;
     var encryptedText = "";
     for (var i = 0; i < inputText.length; i++) {
         encryptedText += String.fromCharCode(inputText.charCodeAt(i) + 1);
     }
     document.getElementById("encryptedText").innerText = encryptedText;
 
     ocultarImagem();
 }
 
 function descriptografar() {
     var encryptedText = document.getElementById("encryptedText").innerText;
     var decryptedText = "";
     for (var i = 0; i < encryptedText.length; i++) {
         decryptedText += String.fromCharCode(encryptedText.charCodeAt(i) - 1); 
     }
     document.getElementById("decryptedText").innerText = decryptedText;
 
     ocultarImagem();
 }
 
 function ocultarImagem() {
     document.getElementById("imagem").style.display = "none";
 }