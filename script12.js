const quitarHTMLRegExp = /<[^>]*>/g;
const textoConHTML = "<b>Hola</b> <p>Cómo estás?</p>";
const textoLimpio = textoConHTML.replace(quitarHTMLRegExp, "");
console.log(textoLimpio);