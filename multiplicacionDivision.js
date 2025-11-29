export function multiplicacion (a, b){
    return a * b;
}
export function division (a, b){
    if (b === 0)
        throw new Error("No se puede dividir entre cero");
    else
        return a / b;
}