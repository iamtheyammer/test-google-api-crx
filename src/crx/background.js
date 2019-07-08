getToken().then((tok) => {
  token = tok;
  console.log(tok);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(xhttp.responseText);
    }
  };
  xhttp.open("POST", "http://localhost:3000", true);
  xhttp.setRequestHeader('X-Google-Token', tok)
  xhttp.send();
})

function getToken(isInteractive) {
  const params = (isInteractive == true || isInteractive == false) ? {interactive: isInteractive} : {}
  return new Promise((res, rej) => {
    return chrome.identity.getAuthToken(params, (token) => {
      if(token) {
        return res(token)
      } else {
        return rej(token)
      }
    });
  });
} 
