const urlSeguraRegExp = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const texto = "Visita https://google.com y no http://insegura.com";
const urls = texto.match(urlSeguraRegExp);
console.log(urls);