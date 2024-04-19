function generateRandomString() {
    var length = 10; // Change the length of the generated string here
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var randomString = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
  
    document.getElementById("generatedString").textContent = randomString;
  }
  