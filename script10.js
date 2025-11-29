const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passwordRegExp.test("Abc12345"));