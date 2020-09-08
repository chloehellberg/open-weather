export default class Conversion {
  constructor(temperature, visibility) {
    this.temperature = temperature;
    this.visibility = visibility;
  }

  calculateTemp() {
    this.calculateTempToFahrenheit = (((this.temperature - 273.15) * 1.8) + 32).toFixed(1);
    return this.calculateTempToFahrenheit;
  }

  calculateVisibility() {
    this.calculateToMiles = (this.visibility / 1609.344).toFixed(2);
    return this.calculateToMiles;
  }

}