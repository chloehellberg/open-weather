export default class Conversion {
  constructor(temperature) {
    this.temperature = temperature;
  }

  calculateTemp() {
    this.calculateTempToFahrenheit = (((this.temperature - 273.15) * 1.8) + 32).toFixed(1);
    return this.calculateTempToFahrenheit;
  }

}