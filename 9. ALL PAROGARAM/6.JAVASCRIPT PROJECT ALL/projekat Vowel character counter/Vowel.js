function countVowels() {
    var text = document.getElementById('inputText').value.toLowerCase();
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        vowelCount++;
      }
    }
  
    document.getElementById('vowelCount').innerText = vowelCount;
  }
  