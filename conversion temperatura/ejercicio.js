import promptSync from "prompt-sync";
const prompt = promptSync();

function conversionTemperatura() {
  let celsius = parseFloat(
    prompt("Ingrese la temperatura en grados Celsius: ")
  );

  while (isNaN(celsius)) {
    console.log("Error: Por favor, ingrese un número válido.");
    celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
  }

  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 9) / 5 + 32;

  console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
  console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}

conversionTemperatura();
