// CREATE DIV
function createDiv(type,parent,content,className) {
  const newDiv=document.createElement(type);
  if (type!='') {
    newDiv.innerHTML=content;
  }
  if (className!=null) {
    newDiv.classList.add(className);
  }
  parent.appendChild(newDiv);
  return newDiv;
}

//------------------------------------------------------------------------------------------
// SLEEP FUNCTION
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//------------------------------------------------------------------------------------------

// ESCAPE HTML
function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

//------------------------------------------------------------------------------------------