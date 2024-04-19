function countWords() {
    var text = document.getElementById('inputText').value;
    var wordCount = text.trim().split(/\s+/).length;
    document.getElementById('wordCount').textContent = wordCount;
  }
  