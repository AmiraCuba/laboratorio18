const dividirOracionesRegExp = /[^.?!]+[.?!]\s?/g;
const texto = "Hola. Cómo estás? Bien!";
const oraciones = texto.match(dividirOracionesRegExp).map(s => s.trim());
console.log(oraciones);