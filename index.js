// "Copy to clipboard" text

function copyToClipboard() {

    var copyText = document.getElementById("email");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);    
    
  }